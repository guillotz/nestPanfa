import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComboController } from 'src/combo/combo.controller';
import { Combo } from 'src/entities/combo.entity';
import { ComboRepository } from 'src/repositories/combo.repository';
import { ComboService } from 'src/services/combo.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Combo, ComboRepository]),
    ],
    controllers: [
        ComboController
    ],
    providers: [
        ComboService
    ]
})
export class ComboModule {}
