import { Combo } from "src/entities/combo.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Combo)
export class ComboRepository extends Repository<Combo> {


}