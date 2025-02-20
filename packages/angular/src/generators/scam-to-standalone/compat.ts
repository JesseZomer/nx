import { convertNxGenerator } from '@nrwl/devkit';
import { warnForSchematicUsage } from '../utils/warn-for-schematic-usage';
import { scamToStandalone } from './scam-to-standalone';

export default warnForSchematicUsage(convertNxGenerator(scamToStandalone));
