import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ComboService } from 'src/services/combo.service';

@Controller('combo')
export class ComboController {
    constructor(private readonly comboService: ComboService){}

    @Get()
    getCombos(){
        return this.comboService.getCombos();
    }

    @Get(':id')
    getCombo(@Param('id') id: number){
        return this.comboService.getCombo(id);
    }

    @Put(':id')
    testPutCombo(@Param('id') id: number, @Body() combo: any){
        return this.comboService.modificarCombo(id,combo);
    }

    @Post()
    altaCombo(@Body() combo: any){
        return this.comboService.altaCombo(combo);
    }

    @Delete(':id')
    deleteCombo(@Param('id') id:number){
        return this.comboService.deleteCombo(id);
    }


}
