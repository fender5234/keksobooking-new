// import { template } from './template-data.js';
import { offerForm, offerFormFieldsets,offerFormClass } from './offer-form.js';
import { filterForm,filterFormItemSelects,filterFormClass } from './filter-form.js';
import {addClassDisabledForm} from './offer-disabled.js';
import {addClassActivedForm} from './offer-active.js';


addClassDisabledForm(offerForm, offerFormFieldsets,offerFormClass);
addClassDisabledForm(filterForm,filterFormItemSelects,filterFormClass);


addClassActivedForm(offerForm, offerFormFieldsets,offerFormClass);
addClassActivedForm(filterForm,filterFormItemSelects,filterFormClass);
