// VDED11389 at 12/10/2015 09:49:35
'use strict';
if (typeof veTagData === 'undefined') {
    var veTagData = (function () {
        var b,
            tag = document.getElementById('veConnect'),
            d = {
                journeycode: '552FE17B-B5D9-4790-887C-F218BEDB2BAA',
                captureConfigUrl: 'drs2.veinteractive.com/CaptureConfigService.asmx/CaptureConfig',
                appsServicesUrl: 'appsapi.veinteractive.com',
                veHostDomain: '//config1.veinteractive.com',
                promoteLanding: 'findrz.com',

                captureConfig: {
  CaptureUrl: "drs2.veinteractive.com/CaptureConfigService.asmx/CaptureConfig",
  customerid: 5336,
  datareceiverurl: "drs2.veinteractive.com/DataReceiverService.asmx/DataReceiver",
  Forms: [
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".product .product-image img",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 44719,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".product-description h2:visible",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 44720,
          HtmlAttributeTag: "Value",
          HtmlType: "h2",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".size",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 44721,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 20,
          HtmlPath: null
        },
        {
          ClientFieldName: ".color",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 44722,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 19,
          HtmlPath: null
        },
        {
          ClientFieldName: ".new",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 44723,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".product-amount input",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 44724,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".product-total:not(:first)",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 44725,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".calculation .right:first",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 44726,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".calculation .calculation-line.total .right",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 44727,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 8,
          HtmlPath: null
        },
        {
          ClientFieldName: "discount",
          DomEvent: "OnChange",
          FieldTypeName: "Id",
          FormMappingId: 44728,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 7,
          HtmlPath: null
        },
        {
          ClientFieldName: "LoginForm_Login",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 44729,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        },
        {
          ClientFieldName: ".product a",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 54668,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        }
      ],
      FormId: 21841,
      FormTypeId: 1,
      FormURLs: [
        "shop.protest.eu/is-bin/INTERSHOP.enfinity/WFS/Protest-NL-Site/nl_NL/-/EUR/ViewData-Start/",
        "shop.protest.eu/is-bin/INTERSHOP.enfinity/WFS/Protest-NL-Site/nl_NL/-/EUR/ViewData-Start/*"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: [
        {
          ParameterValue: "ViewRequisition-View",
          Paremeter: "JumpTarget"
        }
      ]
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "email",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 44730,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        },
        {
          ClientFieldName: "CredentialForm_Login",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 44731,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        },
        {
          ClientFieldName: "InvoiceToAddressForm_Email",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 44732,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        },
        {
          ClientFieldName: "LoginForm_Login",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 44733,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        },
        {
          ClientFieldName: "count",
          DomEvent: "OnLoad",
          FieldTypeName: "Id",
          FormMappingId: 44734,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: "InvoiceToAddressForm_FirstName",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 44747,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: "InvoiceToAddressForm_LastName",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 44748,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".fields.radio .needsclick:checked",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 44750,
          HtmlAttributeTag: "Value",
          HtmlType: ":radio",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".content-holder .needsclick:checked",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 46860,
          HtmlAttributeTag: "Value",
          HtmlType: ":radio",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: "#acceptTermsConditions:checked",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 48846,
          HtmlAttributeTag: "Id",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        }
      ],
      FormId: 21842,
      FormTypeId: 1,
      FormURLs: [
        "shop.protest.eu/is-bin/INTERSHOP.enfinity/WFS/Protest-NL-Site/nl_NL/-/EUR/ViewData-Start/",
        "shop.protest.eu/is-bin/INTERSHOP.enfinity/WFS/Protest-NL-Site/nl_NL/-/EUR/ViewData-Start/*"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [],
      FormId: 24801,
      FormTypeId: 1,
      FormURLs: [
        "protest.eu"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "email",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 44737,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        }
      ],
      FormId: 24803,
      FormTypeId: 1,
      FormURLs: [
        "shop.protest.eu/is-bin/INTERSHOP.enfinity/WFS/Protest-NL-Site/nl_NL/-/EUR/ViewApplication-DisplayLogin"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "h2:first",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 44746,
          HtmlAttributeTag: "Value",
          HtmlType: "h2",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 9,
          HtmlPath: null
        }
      ],
      FormId: 24812,
      FormTypeId: 2,
      FormURLs: [
        "shop.protest.eu/is-bin/INTERSHOP.enfinity/WFS/Protest-NL-Site/nl_NL/-/EUR/ViewData-Start/*"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: [
        {
          ParameterValue: "ViewRequisitionCheckoutFinish-OrderConfirmation",
          Paremeter: "JumpTarget"
        }
      ]
    }
  ],
  IdentifyAbandonmentOr: true,
  JourneyCode: "552FE17B-B5D9-4790-887C-F218BEDB2BAA",
  JourneyId: 6757,
  JourneyTimeOut: 1800,
  NumberIdentifiedFields: 0,
  OptOutField: 0
},
                /*
                 * The custom settings are based on the standard defined on Settings.js.
                 */
                settings: { domainsToIgnore: ['shop.protest.eu','protest.eu' ], unsupportedBrowsersVersionPlatform: { 'ie' : ['8'] },
consoleMessagesEnabled: false,
} ,

                /*
                 * Custom events that allow custom behavior per journey. The standard is defined on CustomEvents.js.
                 */
                customEvents: {},

                /*
                 * Criteria filters that are setup by tech team. The types of Criteria filters possible are:
                 *       * Personality - The matching of this criteria filters will defined the personality that the chat will have
                 *       * Variation
                 */
                criteriaFilters: {
  chat: [],
  assist: [],
  promote: []
},

                /*
                 * All the apps that Ve Interactive has with the events
                 */
                appsMappings: {},

                /*
                 * All the apps that Ve Interactive has with the events
                 */
                apps: [
  {
    name: "Chat",
    exit: true,
    inactivity: true,
    backButton: true,
    load: true,
    enabled: true,
    maxActivationsPerSession: null,
    activateOnlyOnLastTab: false,
    minTimeBetweenActivations: null,
    exitIntent: true
  }
]
            };

        if (!tag) {

            // Adding the Capture-apps file to the DOM
            tag = document.createElement('script');
            tag.type = 'text/javascript';
            tag.id = 'veConnect';
            tag.async = true;
            tag.src = window.location.protocol + d.veHostDomain + '/scripts/4.6/capture-apps-4.6.0.js';
            b = document.getElementsByTagName('script')[0];
            b.parentNode.insertBefore(tag, b);
        }
        return d;
    })();
};
