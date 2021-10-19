import { Injectable } from '@nestjs/common';
import { ComboRepository } from 'src/repositories/combo.repository';

@Injectable()
export class ComboService {
    constructor(private readonly comboRepo: ComboRepository){}



    async getCombos(){
        return await this.comboRepo.find();
    }

    async getCombo(id){
        return await this.comboRepo.findOne(id);
    }

    async altaCombo(combo){
        return await this.comboRepo.save(combo);
    }

    async modificarCombo(id,combo){
        return await this.comboRepo.update(id,combo);
    }

    async deleteCombo(id){
        return await this.comboRepo.delete(id);
    }
}
