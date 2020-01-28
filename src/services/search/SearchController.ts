import {getPlaces} from './provider/OpenCageDataProvider';

export const getPlaceByName = async (q: string) =>{
    if(q.length < 3){
        return {
            type: 'FeatureCollection',
            features: []
        };
    }

    return await getPlaces(q);
}