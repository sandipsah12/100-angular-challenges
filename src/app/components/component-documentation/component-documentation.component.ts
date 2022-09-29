import { Component, ViewChild } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';
import { ButtonMeta } from '../button-toggle/button-meta.model';
import { LoaderType } from '../loader/models/loader-type.enum';
import { PillType } from '../pill/pill-type.enum';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';
import { RibbonType } from '../ribbon/ribbon.type';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'],
})
export class ComponentDocumentationComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ];

  public progressValue = 25;
  public loaderType: LoaderType = LoaderType.Loading;
  public ribbonLocation = RibbonLocation;
  public ribbonType = RibbonType;
  public ribbonStyle: { location: RibbonLocation; type: RibbonType } = {
    location: RibbonLocation.TopRight,
    type: RibbonType.Info,
  };
  public toggleValue = false;
  public tabs: { title: string; active: boolean }[] = [
    {
      title: 'Tab 1',
      active: true,
    },
    {
      title: 'Tab 2',
      active: false,
    },
  ];
  public selectedTab = 0;
  @ViewChild('snackbar') public snackBar!: SnackbarComponent;
  public buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ];
  public loaded = true;
  public pillType = PillType;
  public debounceExampleMethod(value: string) {
    console.log('Component Documentation', value);
  }

  public snackbarShow() {
    this.snackBar.showMessage('Snackbar Example');
  }
}
