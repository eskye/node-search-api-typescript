import {Request, Response} from 'express';
import { getPlaceByName } from './SearchController';
 

export default [
    {
       path: '/api/v1/search',
       method: 'get',
       handler: [
           async({query}: Request, res: Response) =>{
           const result = await getPlaceByName(query.q);
           res.status(200).send(result);
       }
    ]
    }
];