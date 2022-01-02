import { CliInstance } from '../CliInstance';


export function tree(cli:CliInstance):any{
    let i = cli.getInternalMethods();
    const usageInstance = i.getUsageInstance();
    const commandInstance = i.getCommandInstance()
    const context = i.getContext()
    const loggerInstance = i.getLoggerInstance()
    const parseContext = i.getParseContext()
    const parserConfiguration = i.getParserConfiguration()
    const validationInstance = i.getValidationInstance()

    return {
      usageInstance,
      commandInstance,
      context,
      loggerInstance,
      parseContext,
      parserConfiguration,
      validationInstance,
    }
}
