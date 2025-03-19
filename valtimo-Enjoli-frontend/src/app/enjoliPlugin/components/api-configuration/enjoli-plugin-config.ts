import {PluginConfigurationData} from '@valtimo/plugin';

interface EnjoliPluginConfig extends PluginConfigurationData {
  configurationTitle: string;
  apiUrl: string;
}

export {EnjoliPluginConfig};
