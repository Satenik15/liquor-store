import {
	Component,
  OnInit,
	Input,
	TemplateRef,
	ViewContainerRef,
	ViewChild,
	OnChanges,
	SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-svg-sprite-icon',
  styleUrls: ['./svg-sprite-icon.component.scss'],
  template: `
		<ng-container #viewContainer></ng-container>
		<ng-template #svgIcon>
			<svg class="svg-icon" [attr.height]="height" [attr.width]="width" [attr.viewBox]="viewBox">
				<use
                    attr.xlink:href="assets/sprite.svg#{{ icon }}"
					[class.normalIcon]="hoverIcon"
					[class.d-none]="forceHover"
				></use>

				<!-- <use
					*ngIf="hoverIcon"
					class="hoverIcon"
					attr.xlink:href="assets/sprite.svg#{{ hoverIcon }}"
					[class.d-block]="forceHover"
				></use> -->
			</svg>
		</ng-template>
	`,
})
export class SvgSpriteIconComponent implements OnInit, OnChanges {
  @ViewChild('viewContainer', { read: ViewContainerRef, static: true }) viewContainer: ViewContainerRef;
	@ViewChild('svgIcon', { read: TemplateRef, static: true }) template: TemplateRef<any>;
	@Input() icon: string;
	@Input() hoverIcon?: string;
	@Input() forceHover = false;
	@Input() height = '16px';
	@Input() width = '100%';
	@Input() viewBox: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
		if (changes.forceHover?.firstChange) {
			this.viewContainer.insert(this.template.createEmbeddedView(null));
		} else if (!this.forceHover) {
			this.viewContainer.detach();
			this.viewContainer.insert(this.template.createEmbeddedView(null));
		}
	}

}

export default SvgSpriteIconComponent;
