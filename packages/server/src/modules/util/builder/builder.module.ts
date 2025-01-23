// NestJS
import { Global, Module } from '@nestjs/common';
// Providers
import { ReturnObjectBuilderService } from './services/returnObjectBuilder.service';
import { ObjectBuilderService } from './services/builder.service';
import { OptionObjectBuilderService } from './services/optionObjectBuilder.service';

@Global()
@Module({
  exports: [ObjectBuilderService],
  providers: [
    ReturnObjectBuilderService,
    OptionObjectBuilderService,
    ObjectBuilderService,
  ],
})
export class ObjectBuilderModule {}
