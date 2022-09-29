import { RichTextPipe } from './rich-text.pipe';

fdescribe(RichTextPipe.name, () => {
  it('Exists', () => {
    // assert
    expect(RichTextPipe).toBeDefined();
  });

  describe('General', () => {
    let pipe: RichTextPipe;

    beforeEach(() => {
      pipe = new RichTextPipe();
    });

    describe('transform', () => {
      it('non valid html returns empty', () => {
        // arrange
        const value = '<a> 1234';

        // act
        const result = pipe.transform(value);

        // assert
        expect(result).toBe('');
      });

      it('empty html returns empty string', () => {
        // arrange
        const value = '<a></a>';

        // act
        const result = pipe.transform(value);

        // assert
        expect(result).toBe('');
      });

      it('valid non empty html returns the html', () => {
        // arrange
        const value = '<button>Hello World</button>';

        // act
        const result = pipe.transform(value);

        // assert
        expect(result).toBe(value);
      });
    });
  });
});
