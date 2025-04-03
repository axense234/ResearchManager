// NestJS
import { Global, Module } from '@nestjs/common';
// Providers
import { ReturnObjectBuilderService } from './services/returnObjectBuilder.service';
import { ObjectBuilderService } from './services/builder.service';
import { OptionObjectBuilderService } from './services/optionObjectBuilder.service';
import { DataObjectBuilderService } from './services/dataObjectBuilder.service';
import { QueryObjectBuilderService } from './services/queryObjectBuilder.service';
import { OrderByObjectBuilderService } from './services/orderByObjectBuilder.service';

@Global()
@Module({
  exports: [ObjectBuilderService],
  providers: [
    ReturnObjectBuilderService,
    OptionObjectBuilderService,
    DataObjectBuilderService,
    QueryObjectBuilderService,
    OrderByObjectBuilderService,
    ObjectBuilderService,
  ],
})
export class ObjectBuilderModule {}
