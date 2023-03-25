class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequalityexample',
      name: 'test',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.COMMAND,
          text: 'save [one] to cloud',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
          }
        }
      ]
    };
  }

  strictlyEquals(args) {
    return document.cookie(args.ONE;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
