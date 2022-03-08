import {Request, Response} from 'express'

//importat o model
import { Pet } from '../models/pet';

//importando menu
import { createMenuObject } from '../helpers/createMenuObjects';

export const search = (req:Request, res:Response) =>{

    let query: string = req.query.q as string;

    let list = Pet.getFromName(query)

    //renderizar a página
    res.render('pages/pages', {
        //aqui dentro vamos mandar os nossos itens
        menu:createMenuObject(''),
        list
    })

}