import { async } from '@angular/core/testing';
import { SnackbarService } from '../services/snackbar/snackbar.service';
import { CopyDirective } from './copy.directive';

fdescribe(CopyDirective.name, () => {
  it('exists', () => {
    expect(CopyDirective).toBeDefined();
  });

  describe('General', () => {
    let directive: CopyDirective;
    let snackbarService: SnackbarService;
    let nav: any;
    let doc: any;
    let copiedText: string | null = null;
    let command: string | null = null;

    beforeEach(() => {
      nav = {
        clipboard: {
          writeText(text: string) {
            copiedText = text;
          },
        },
      };

      doc = {
        execCommand(text: string) {
          command = text;
        },
      };

      snackbarService = new SnackbarService();
      directive = new CopyDirective(nav as any, doc as any, snackbarService);
    });

    describe('copy', () => {
      it('copies correct text', async () => {
        // arrange
        const text: string = 'Hello World';
        copiedText = '';
        directive.appCopy = text;

        // act
        await directive.copy();

        // assert
        expect(copiedText).toBe(text);
      });

      it('document copies', async () => {
        // arrange
        command = '';

        // act
        await directive.copy();

        // assert
        expect(command).toBe('copy');
      });

      it('notify snackbar of successful copy', async () => {
        // arrange
        spyOn(directive.snackbarService, 'callSnackbar');

        // act
        await directive.copy();

        // assert
        expect(directive.snackbarService.callSnackbar).toHaveBeenCalledWith(
          'Copied Successfully'
        );
      });

      it('notify snackbar of copy failed', async () => {
        // arrange
        spyOn(directive.snackbarService, 'callSnackbar');
        spyOn(directive.navigator.clipboard, 'writeText').and.throwError('');
        // act
        await directive.copy();

        // assert
        expect(directive.snackbarService.callSnackbar).toHaveBeenCalledWith(
          'Copy Failed'
        );
      });
    });
  });
});
