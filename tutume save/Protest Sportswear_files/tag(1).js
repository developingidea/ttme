// V-E1-DPLY-WS-01 at 29/01/2016 03:25:00
'use strict';
if (typeof veTagData === 'undefined') {
    var veTagData = (function () {
        var b,
            tag = document.getElementById('veConnect'),
            d = {
                journeycode: '42C12697-E6D2-48C0-B4A4-4C0022310448',
                captureConfigUrl: 'drs2.veinteractive.com/CaptureConfigService.asmx/CaptureConfig',
                appsServicesUrl: 'appsapi.veinteractive.com',
                veHostDomain: '//config1.veinteractive.com',
                promoteLanding: 'uk.findrz.com',

                captureConfig: {
  CaptureUrl: "rcs.veinteractive.com/CaptureConfigService.asmx/CaptureConfig",
  customerid: 9951,
  datareceiverurl: "drs2.veinteractive.com/DataReceiverService.asmx/DataReceiver",
  Forms: [
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".product-image img",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 98933,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".product-description h2",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 98941,
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
          FormMappingId: 98945,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 20,
          HtmlPath: null
        },
        {
          ClientFieldName: ".color ",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 98947,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 19,
          HtmlPath: null
        },
        {
          ClientFieldName: ".product-price .new",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 98950,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: "div.right:odd:odd",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 112619,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 8,
          HtmlPath: null
        }
      ],
      FormId: 40996,
      FormTypeId: 1,
      FormURLs: [
        "shop.protest.eu/is-bin/INTERSHOP.enfinity/WFS/Protest-FR-Site/fr_FR/-/EUR/ViewData-Start/*"
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
          FormMappingId: 99342,
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
          FormMappingId: 99343,
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
          FormMappingId: 99344,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        }
      ],
      FormId: 41496,
      FormTypeId: 1,
      FormURLs: [
        "shop.protest.eu/is-bin/INTERSHOP.enfinity/WFS/Protest-FR-Site/fr_FR/-/EUR/ViewData-Start/*"
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
      FormId: 41498,
      FormTypeId: 2,
      FormURLs: [
        "shop.protest.eu/is-bin/INTERSHOP.enfinity/WFS/Protest-FR-Site/fr_FR/-/EUR/ViewData-Start/*"
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
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".photo img:first",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 112845,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: "h2:first",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 112847,
          HtmlAttributeTag: "Value",
          HtmlType: "h2",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".tab p:first",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 112849,
          HtmlAttributeTag: "Value",
          HtmlType: "p",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 12,
          HtmlPath: null
        },
        {
          ClientFieldName: "p.price",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 112852,
          HtmlAttributeTag: "Value",
          HtmlType: "p",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".breadcrumbs a[class!='nolink']:even:even:last",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 112853,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 18,
          HtmlPath: null
        },
        {
          ClientFieldName: "window.location.href",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 112854,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".article-number:first",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 112857,
          HtmlAttributeTag: "Value",
          HtmlType: "p",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 10,
          HtmlPath: null
        }
      ],
      FormId: 45589,
      FormTypeId: 4,
      FormURLs: [
        "shop.protest.eu/fr/produit/*"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    }
  ],
  IdentifyAbandonmentOr: true,
  JourneyCode: "42C12697-E6D2-48C0-B4A4-4C0022310448",
  JourneyId: 12580,
  JourneyTimeOut: 1800,
  NumberIdentifiedFields: 0,
  OptOutField: 0
},
                /*
                 * The custom settings are based on the standard defined on Settings.js.
                 */
                settings: { domainsToIgnore: ['shop.protest.eu' ], consoleMessagesEnabled: false,
 elementsStoppingAppsOnClick: [ ],
 autocompleteInputsHandler: [ ],
 keywordsRegExp: [ { source: 'Example', regexp: / /, notSearchEngine: false, replaceCharactersBySpace: '-', storeSearchTerm: false, showNoProducts: false, ignoreCloses: false } ],
 cookies: { enabled: true , timeToLive: 60}
}
,

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
