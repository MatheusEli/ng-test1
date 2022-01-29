import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name,() => {

  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate id when id input property is missing', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate id when id input property is present', () => {
    component.id = 'asdasd';
    fixture.detectChanges();
    expect(component.id).toBe('asdasd');
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
  should trigger emission when called`, () => {

    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();

    /*component.liked.subscribe(() => {
      expect(true).toBeTrue();
      done();
    });
    component.like();*/

  });
});
