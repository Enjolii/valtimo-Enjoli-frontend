interface EnjoliActionsConfig {
  type: string;
  gamedata: string;
  filmdata: string;
}

interface PrintActionConfig {
  print: string;
}

interface DeleteActionConfig {
  uuid: string;
}

interface GetActionConfig {
  uuid: string;
}

interface UpdateActionConfig {
  uuid: string;
  type: string;
  gamedata: string;
  filmdata: string;
}

export {EnjoliActionsConfig, PrintActionConfig, DeleteActionConfig, GetActionConfig, UpdateActionConfig};
