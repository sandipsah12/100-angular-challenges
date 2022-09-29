import { FormControl, FormGroup } from '@angular/forms';
import { FormDirtyGuard } from './form-dirty.guard';
import { IFormDirty } from './form-dirty.interface';

fdescribe(FormDirtyGuard.name, () => {
  it('exists', () => {
    expect(FormDirtyGuard).toBeDefined();
  });

  describe('General', () => {
    let guard: FormDirtyGuard;
    let component: IFormDirty;

    beforeEach(() => {
      guard = new FormDirtyGuard();
      component = {
        form: new FormGroup({ firstName: new FormControl('', []) }),
      };
    });

    describe('canDeactivate', () => {
      it('when form is dirty ask the user if they would like to proceed ', () => {
        // arrange
        component.form.get('firstName')?.markAsDirty();
        spyOn(window, 'confirm').and.returnValue(true);
        // act
        const result = guard.canDeactivate(component);

        // assert
        expect(window.confirm).toHaveBeenCalled();
      });

      it('when form is clean proceeds', () => {
        // act
        const result = guard.canDeactivate(component);

        // assert
        expect(result).toBe(true);
      });
    });
  });
});
