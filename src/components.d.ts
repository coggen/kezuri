/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlertType } from "./components/sharpen-alert/sharpen-alert";
import { CardBorder, CardPadding } from "./components/sharpen-card/sharpen-card";
import { CardPadding as CardPadding1 } from "./components/sharpen-card/sharpen-card";
import { LabelType } from "./components/sharpen-label/sharpen-label";
export { AlertType } from "./components/sharpen-alert/sharpen-alert";
export { CardBorder, CardPadding } from "./components/sharpen-card/sharpen-card";
export { CardPadding as CardPadding1 } from "./components/sharpen-card/sharpen-card";
export { LabelType } from "./components/sharpen-label/sharpen-label";
export namespace Components {
    interface SharpenAlert {
        /**
          * The alert heading
         */
        "heading": string;
        /**
          * Icon
         */
        "icon": string;
        /**
          * Alert type
         */
        "type": AlertType;
    }
    interface SharpenAssessmentHeader {
        "name": string;
        "progress": number;
        "section": string;
    }
    interface SharpenBack {
        "href": string;
    }
    interface SharpenCard {
        /**
          * Border style
         */
        "border": CardBorder;
        /**
          * Padding size
         */
        "padding": CardPadding;
    }
    interface SharpenCardContent {
        /**
          * Padding size
         */
        "padding": CardPadding1;
    }
    interface SharpenCardHeader {
    }
    interface SharpenCourseDescription {
        /**
          * Icon
         */
        "icon": string;
    }
    interface SharpenDashboardCard {
        "heading": string;
        "imgSrc": string;
        "primaryLink": string;
        "primaryLinkText": string;
        "secondaryLink": string;
        "secondaryLinkText": string;
        "subheading": string;
    }
    interface SharpenEmpty {
    }
    interface SharpenFooter {
        /**
          * Border style
         */
        "currentUser": string;
    }
    interface SharpenLabel {
        /**
          * Icon
         */
        "icon": string;
        /**
          * Alert type
         */
        "type": LabelType;
    }
    interface SharpenLoading {
    }
    interface SharpenMenu {
        "attachment": string;
        "targetAttachment": string;
        "triggerId": string;
    }
    interface SharpenNavLink {
        "href": string;
        "icon": string;
        "name": string;
        "selected": boolean;
    }
    interface SharpenPageNavigation {
    }
    interface SharpenPrimaryNavigation {
        "brandHref": string;
        "currentLearner": string;
        "currentUser": string;
    }
    interface SharpenProfileCard {
        "backgroundColor": string;
        "buttonText": string;
        "color": string;
        "initial": string;
        "name": string;
        "url": string;
    }
    interface SharpenProgressBar {
        "elevatedThreshold": number;
        "highThreshold": number;
        "lowThreshold": number;
        "progressVal": number;
        "showDescription": boolean;
        "statusLabel": string;
    }
    interface SharpenProgressCircle {
        "progressLabel": any;
        "progressVal": any;
    }
    interface SharpenProgressDial {
        "description": string;
        "elevatedThreshold": number;
        "highThreshold": number;
        "lowThreshold": number;
        "progressVal": number;
    }
    interface SharpenSimpleMetric {
    }
    interface SharpenWizardHeader {
        "backHref": string;
        "currentStep": number;
        "section": string;
        "totalSteps": number;
    }
}
declare global {
    interface HTMLSharpenAlertElement extends Components.SharpenAlert, HTMLStencilElement {
    }
    var HTMLSharpenAlertElement: {
        prototype: HTMLSharpenAlertElement;
        new (): HTMLSharpenAlertElement;
    };
    interface HTMLSharpenAssessmentHeaderElement extends Components.SharpenAssessmentHeader, HTMLStencilElement {
    }
    var HTMLSharpenAssessmentHeaderElement: {
        prototype: HTMLSharpenAssessmentHeaderElement;
        new (): HTMLSharpenAssessmentHeaderElement;
    };
    interface HTMLSharpenBackElement extends Components.SharpenBack, HTMLStencilElement {
    }
    var HTMLSharpenBackElement: {
        prototype: HTMLSharpenBackElement;
        new (): HTMLSharpenBackElement;
    };
    interface HTMLSharpenCardElement extends Components.SharpenCard, HTMLStencilElement {
    }
    var HTMLSharpenCardElement: {
        prototype: HTMLSharpenCardElement;
        new (): HTMLSharpenCardElement;
    };
    interface HTMLSharpenCardContentElement extends Components.SharpenCardContent, HTMLStencilElement {
    }
    var HTMLSharpenCardContentElement: {
        prototype: HTMLSharpenCardContentElement;
        new (): HTMLSharpenCardContentElement;
    };
    interface HTMLSharpenCardHeaderElement extends Components.SharpenCardHeader, HTMLStencilElement {
    }
    var HTMLSharpenCardHeaderElement: {
        prototype: HTMLSharpenCardHeaderElement;
        new (): HTMLSharpenCardHeaderElement;
    };
    interface HTMLSharpenCourseDescriptionElement extends Components.SharpenCourseDescription, HTMLStencilElement {
    }
    var HTMLSharpenCourseDescriptionElement: {
        prototype: HTMLSharpenCourseDescriptionElement;
        new (): HTMLSharpenCourseDescriptionElement;
    };
    interface HTMLSharpenDashboardCardElement extends Components.SharpenDashboardCard, HTMLStencilElement {
    }
    var HTMLSharpenDashboardCardElement: {
        prototype: HTMLSharpenDashboardCardElement;
        new (): HTMLSharpenDashboardCardElement;
    };
    interface HTMLSharpenEmptyElement extends Components.SharpenEmpty, HTMLStencilElement {
    }
    var HTMLSharpenEmptyElement: {
        prototype: HTMLSharpenEmptyElement;
        new (): HTMLSharpenEmptyElement;
    };
    interface HTMLSharpenFooterElement extends Components.SharpenFooter, HTMLStencilElement {
    }
    var HTMLSharpenFooterElement: {
        prototype: HTMLSharpenFooterElement;
        new (): HTMLSharpenFooterElement;
    };
    interface HTMLSharpenLabelElement extends Components.SharpenLabel, HTMLStencilElement {
    }
    var HTMLSharpenLabelElement: {
        prototype: HTMLSharpenLabelElement;
        new (): HTMLSharpenLabelElement;
    };
    interface HTMLSharpenLoadingElement extends Components.SharpenLoading, HTMLStencilElement {
    }
    var HTMLSharpenLoadingElement: {
        prototype: HTMLSharpenLoadingElement;
        new (): HTMLSharpenLoadingElement;
    };
    interface HTMLSharpenMenuElement extends Components.SharpenMenu, HTMLStencilElement {
    }
    var HTMLSharpenMenuElement: {
        prototype: HTMLSharpenMenuElement;
        new (): HTMLSharpenMenuElement;
    };
    interface HTMLSharpenNavLinkElement extends Components.SharpenNavLink, HTMLStencilElement {
    }
    var HTMLSharpenNavLinkElement: {
        prototype: HTMLSharpenNavLinkElement;
        new (): HTMLSharpenNavLinkElement;
    };
    interface HTMLSharpenPageNavigationElement extends Components.SharpenPageNavigation, HTMLStencilElement {
    }
    var HTMLSharpenPageNavigationElement: {
        prototype: HTMLSharpenPageNavigationElement;
        new (): HTMLSharpenPageNavigationElement;
    };
    interface HTMLSharpenPrimaryNavigationElement extends Components.SharpenPrimaryNavigation, HTMLStencilElement {
    }
    var HTMLSharpenPrimaryNavigationElement: {
        prototype: HTMLSharpenPrimaryNavigationElement;
        new (): HTMLSharpenPrimaryNavigationElement;
    };
    interface HTMLSharpenProfileCardElement extends Components.SharpenProfileCard, HTMLStencilElement {
    }
    var HTMLSharpenProfileCardElement: {
        prototype: HTMLSharpenProfileCardElement;
        new (): HTMLSharpenProfileCardElement;
    };
    interface HTMLSharpenProgressBarElement extends Components.SharpenProgressBar, HTMLStencilElement {
    }
    var HTMLSharpenProgressBarElement: {
        prototype: HTMLSharpenProgressBarElement;
        new (): HTMLSharpenProgressBarElement;
    };
    interface HTMLSharpenProgressCircleElement extends Components.SharpenProgressCircle, HTMLStencilElement {
    }
    var HTMLSharpenProgressCircleElement: {
        prototype: HTMLSharpenProgressCircleElement;
        new (): HTMLSharpenProgressCircleElement;
    };
    interface HTMLSharpenProgressDialElement extends Components.SharpenProgressDial, HTMLStencilElement {
    }
    var HTMLSharpenProgressDialElement: {
        prototype: HTMLSharpenProgressDialElement;
        new (): HTMLSharpenProgressDialElement;
    };
    interface HTMLSharpenSimpleMetricElement extends Components.SharpenSimpleMetric, HTMLStencilElement {
    }
    var HTMLSharpenSimpleMetricElement: {
        prototype: HTMLSharpenSimpleMetricElement;
        new (): HTMLSharpenSimpleMetricElement;
    };
    interface HTMLSharpenWizardHeaderElement extends Components.SharpenWizardHeader, HTMLStencilElement {
    }
    var HTMLSharpenWizardHeaderElement: {
        prototype: HTMLSharpenWizardHeaderElement;
        new (): HTMLSharpenWizardHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "sharpen-alert": HTMLSharpenAlertElement;
        "sharpen-assessment-header": HTMLSharpenAssessmentHeaderElement;
        "sharpen-back": HTMLSharpenBackElement;
        "sharpen-card": HTMLSharpenCardElement;
        "sharpen-card-content": HTMLSharpenCardContentElement;
        "sharpen-card-header": HTMLSharpenCardHeaderElement;
        "sharpen-course-description": HTMLSharpenCourseDescriptionElement;
        "sharpen-dashboard-card": HTMLSharpenDashboardCardElement;
        "sharpen-empty": HTMLSharpenEmptyElement;
        "sharpen-footer": HTMLSharpenFooterElement;
        "sharpen-label": HTMLSharpenLabelElement;
        "sharpen-loading": HTMLSharpenLoadingElement;
        "sharpen-menu": HTMLSharpenMenuElement;
        "sharpen-nav-link": HTMLSharpenNavLinkElement;
        "sharpen-page-navigation": HTMLSharpenPageNavigationElement;
        "sharpen-primary-navigation": HTMLSharpenPrimaryNavigationElement;
        "sharpen-profile-card": HTMLSharpenProfileCardElement;
        "sharpen-progress-bar": HTMLSharpenProgressBarElement;
        "sharpen-progress-circle": HTMLSharpenProgressCircleElement;
        "sharpen-progress-dial": HTMLSharpenProgressDialElement;
        "sharpen-simple-metric": HTMLSharpenSimpleMetricElement;
        "sharpen-wizard-header": HTMLSharpenWizardHeaderElement;
    }
}
declare namespace LocalJSX {
    interface SharpenAlert {
        /**
          * The alert heading
         */
        "heading"?: string;
        /**
          * Icon
         */
        "icon"?: string;
        /**
          * Alert type
         */
        "type": AlertType;
    }
    interface SharpenAssessmentHeader {
        "name": string;
        "progress"?: number;
        "section"?: string;
    }
    interface SharpenBack {
        "href"?: string;
    }
    interface SharpenCard {
        /**
          * Border style
         */
        "border"?: CardBorder;
        /**
          * Padding size
         */
        "padding"?: CardPadding;
    }
    interface SharpenCardContent {
        /**
          * Padding size
         */
        "padding"?: CardPadding1;
    }
    interface SharpenCardHeader {
    }
    interface SharpenCourseDescription {
        /**
          * Icon
         */
        "icon"?: string;
    }
    interface SharpenDashboardCard {
        "heading": string;
        "imgSrc": string;
        "primaryLink"?: string;
        "primaryLinkText"?: string;
        "secondaryLink"?: string;
        "secondaryLinkText"?: string;
        "subheading"?: string;
    }
    interface SharpenEmpty {
    }
    interface SharpenFooter {
        /**
          * Border style
         */
        "currentUser"?: string;
    }
    interface SharpenLabel {
        /**
          * Icon
         */
        "icon"?: string;
        /**
          * Alert type
         */
        "type": LabelType;
    }
    interface SharpenLoading {
    }
    interface SharpenMenu {
        "attachment"?: string;
        "targetAttachment"?: string;
        "triggerId"?: string;
    }
    interface SharpenNavLink {
        "href"?: string;
        "icon"?: string;
        "name"?: string;
        "selected"?: boolean;
    }
    interface SharpenPageNavigation {
    }
    interface SharpenPrimaryNavigation {
        "brandHref"?: string;
        "currentLearner"?: string;
        "currentUser"?: string;
    }
    interface SharpenProfileCard {
        "backgroundColor"?: string;
        "buttonText"?: string;
        "color"?: string;
        "initial": string;
        "name": string;
        "url": string;
    }
    interface SharpenProgressBar {
        "elevatedThreshold"?: number;
        "highThreshold"?: number;
        "lowThreshold"?: number;
        "progressVal"?: number;
        "showDescription"?: boolean;
        "statusLabel"?: string;
    }
    interface SharpenProgressCircle {
        "progressLabel"?: any;
        "progressVal"?: any;
    }
    interface SharpenProgressDial {
        "description"?: string;
        "elevatedThreshold"?: number;
        "highThreshold"?: number;
        "lowThreshold"?: number;
        "progressVal"?: number;
    }
    interface SharpenSimpleMetric {
    }
    interface SharpenWizardHeader {
        "backHref"?: string;
        "currentStep": number;
        "section": string;
        "totalSteps": number;
    }
    interface IntrinsicElements {
        "sharpen-alert": SharpenAlert;
        "sharpen-assessment-header": SharpenAssessmentHeader;
        "sharpen-back": SharpenBack;
        "sharpen-card": SharpenCard;
        "sharpen-card-content": SharpenCardContent;
        "sharpen-card-header": SharpenCardHeader;
        "sharpen-course-description": SharpenCourseDescription;
        "sharpen-dashboard-card": SharpenDashboardCard;
        "sharpen-empty": SharpenEmpty;
        "sharpen-footer": SharpenFooter;
        "sharpen-label": SharpenLabel;
        "sharpen-loading": SharpenLoading;
        "sharpen-menu": SharpenMenu;
        "sharpen-nav-link": SharpenNavLink;
        "sharpen-page-navigation": SharpenPageNavigation;
        "sharpen-primary-navigation": SharpenPrimaryNavigation;
        "sharpen-profile-card": SharpenProfileCard;
        "sharpen-progress-bar": SharpenProgressBar;
        "sharpen-progress-circle": SharpenProgressCircle;
        "sharpen-progress-dial": SharpenProgressDial;
        "sharpen-simple-metric": SharpenSimpleMetric;
        "sharpen-wizard-header": SharpenWizardHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sharpen-alert": LocalJSX.SharpenAlert & JSXBase.HTMLAttributes<HTMLSharpenAlertElement>;
            "sharpen-assessment-header": LocalJSX.SharpenAssessmentHeader & JSXBase.HTMLAttributes<HTMLSharpenAssessmentHeaderElement>;
            "sharpen-back": LocalJSX.SharpenBack & JSXBase.HTMLAttributes<HTMLSharpenBackElement>;
            "sharpen-card": LocalJSX.SharpenCard & JSXBase.HTMLAttributes<HTMLSharpenCardElement>;
            "sharpen-card-content": LocalJSX.SharpenCardContent & JSXBase.HTMLAttributes<HTMLSharpenCardContentElement>;
            "sharpen-card-header": LocalJSX.SharpenCardHeader & JSXBase.HTMLAttributes<HTMLSharpenCardHeaderElement>;
            "sharpen-course-description": LocalJSX.SharpenCourseDescription & JSXBase.HTMLAttributes<HTMLSharpenCourseDescriptionElement>;
            "sharpen-dashboard-card": LocalJSX.SharpenDashboardCard & JSXBase.HTMLAttributes<HTMLSharpenDashboardCardElement>;
            "sharpen-empty": LocalJSX.SharpenEmpty & JSXBase.HTMLAttributes<HTMLSharpenEmptyElement>;
            "sharpen-footer": LocalJSX.SharpenFooter & JSXBase.HTMLAttributes<HTMLSharpenFooterElement>;
            "sharpen-label": LocalJSX.SharpenLabel & JSXBase.HTMLAttributes<HTMLSharpenLabelElement>;
            "sharpen-loading": LocalJSX.SharpenLoading & JSXBase.HTMLAttributes<HTMLSharpenLoadingElement>;
            "sharpen-menu": LocalJSX.SharpenMenu & JSXBase.HTMLAttributes<HTMLSharpenMenuElement>;
            "sharpen-nav-link": LocalJSX.SharpenNavLink & JSXBase.HTMLAttributes<HTMLSharpenNavLinkElement>;
            "sharpen-page-navigation": LocalJSX.SharpenPageNavigation & JSXBase.HTMLAttributes<HTMLSharpenPageNavigationElement>;
            "sharpen-primary-navigation": LocalJSX.SharpenPrimaryNavigation & JSXBase.HTMLAttributes<HTMLSharpenPrimaryNavigationElement>;
            "sharpen-profile-card": LocalJSX.SharpenProfileCard & JSXBase.HTMLAttributes<HTMLSharpenProfileCardElement>;
            "sharpen-progress-bar": LocalJSX.SharpenProgressBar & JSXBase.HTMLAttributes<HTMLSharpenProgressBarElement>;
            "sharpen-progress-circle": LocalJSX.SharpenProgressCircle & JSXBase.HTMLAttributes<HTMLSharpenProgressCircleElement>;
            "sharpen-progress-dial": LocalJSX.SharpenProgressDial & JSXBase.HTMLAttributes<HTMLSharpenProgressDialElement>;
            "sharpen-simple-metric": LocalJSX.SharpenSimpleMetric & JSXBase.HTMLAttributes<HTMLSharpenSimpleMetricElement>;
            "sharpen-wizard-header": LocalJSX.SharpenWizardHeader & JSXBase.HTMLAttributes<HTMLSharpenWizardHeaderElement>;
        }
    }
}
