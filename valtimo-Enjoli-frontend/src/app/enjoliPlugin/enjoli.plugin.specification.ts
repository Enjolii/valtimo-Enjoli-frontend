import {PluginSpecification} from '@valtimo/plugin';
import {EnjoliPluginConfigurationComponent} from './models/enjoli-plugin-configuration.component';
import {SAMPLE_PLUGIN_LOGO_BASE64} from '../plugin/assets';
import {EnjoliActionConfigurationComponent} from './components/create-object/enjoli-action-configuration.component';
import {PrintActionConfigurationComponent} from './components/print-action/print-action-configuration.component';
import {DeleteActionConfigurationComponent} from './components/delete-object/delete-action-configuration.component';
import {UpdateActionConfigurationComponent} from './components/update-object/update-action-configuration.component';
import {GetActionConfigurationComponent} from './components/get-object/get-action-configuration.component';

const enjoliPluginSpecification: PluginSpecification = {
  /*
  The plugin definition key of the plugin.
  This needs to be the same as the id received from the backend
  See the key property of the @Plugin annotation in the backend
   */
  pluginId: 'enjoli',
  /*
  A component of the interface PluginConfigurationComponent, used to configure the plugin itself.
   */
  pluginConfigurationComponent: EnjoliPluginConfigurationComponent,
  // Points to a Base64 encoded string, which contains the logo of the plugin.
  pluginLogoBase64: SAMPLE_PLUGIN_LOGO_BASE64,
  functionConfigurationComponents: {
    /*
     For each plugin action id received from the backend, a component is provided of the interface FunctionConfigurationComponent.
     These are used to configure each plugin action.
     */
    'enjoli-action': EnjoliActionConfigurationComponent,
    'print-action': PrintActionConfigurationComponent,
    'delete-action': DeleteActionConfigurationComponent,
    'update-action': UpdateActionConfigurationComponent,
    'get-action': GetActionConfigurationComponent,
  },
  /*
  For each language key an implementation supports, translation keys with a translation are provided below.
  These can then be used in configuration components using the pluginTranslate pipe or the PluginTranslationService.
  At a minumum, the keys 'title' and 'description' need to be defined.
  Each function key also requires a translation key. In this case, the key 'enjoli-action' is added.
   */
  pluginTranslations: {
    nl: {
      title: 'Plugin van Enjoli',
      description: 'De mega coole plugin van Enjoli',
      'enjoli-action': 'Aanmaak actie',
      'print-action': 'Print actie',
      'delete-action': 'Verwijder actie',
      'update-action': 'Update actie',
      'get-action': 'Ophaal actie',
    },
    en: {
      title: 'Plugin by Enjoli',
      description: 'The mega cool plugin by Enjoli',
      'enjoli-action': 'Create action',
      'print-action': 'Print action',
      'delete-action': 'Delete action',
      'update-action': 'Update action',
      'get-action': 'Get action',
    }
  }
};

export {enjoliPluginSpecification};
