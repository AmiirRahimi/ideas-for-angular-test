import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

function testIdSelector(testId: string): string {
    return `[data-testid="${testId}"]`;
}

function queryByCss<T>(fixture: ComponentFixture<T>,testId: string,): DebugElement {
    const debugElement = fixture.debugElement.query(By.css(testIdSelector(testId)));
    if (!debugElement) {
      throw new Error(`queryByCss: Element with ${testId} not found`);
    }
    return debugElement;
}

export function findNativeEl<T>(fixture: ComponentFixture<T> , testId : string): HTMLInputElement{
    return queryByCss(fixture , testId).nativeElement
}
  