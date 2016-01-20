from os.path import join
import json

import yaml

import os.path


class Loader(yaml.Loader):
    def __init__(self, stream):
        self._root = os.path.split(stream.name)[0]
        super(Loader, self).__init__(stream)
        Loader.add_constructor('!include', Loader.include)
        Loader.add_constructor('!import', Loader.include)

    def include(self, node):
        if isinstance(node, yaml.ScalarNode):
            return self.extractFile(self.construct_scalar(node))

        elif isinstance(node, yaml.SequenceNode):
            result = []
            for filename in self.construct_sequence(node):
                result += self.extractFile(filename)
            return result

        elif isinstance(node, yaml.MappingNode):
            result = {}
            for k, v in self.construct_mapping(node).iteritems():
                result[k] = self.extractFile(v)
            return result

        else:
            print("Error:: unrecognised node type in !include statement")
            raise yaml.constructor.ConstructorError

    def extractFile(self, filename):
        filepath = os.path.join(self._root, filename)
        with open(filepath, 'r') as f:
            return yaml.load(f, Loader)


def get_track(track_name):
    with open(join(track_name, 'index.yaml')) as stream:
            track_data = yaml.load(stream, Loader=Loader)
    return track_data


def main():
    db = {'tracks': {}}
    for track_name in ['defense']:
        db['tracks'][track_name] = get_track(track_name)
    db_json = json.dumps(db, sort_keys=True, indent=2)
    with open('db.json', 'w') as output:
        output.write(db_json)


if __name__ == '__main__':
    main()
