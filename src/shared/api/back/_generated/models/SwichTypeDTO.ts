/* tslint:disable */
/* eslint-disable */
/**
 * Tech-Inventory API
 * Rest API of TECH-INVENTORY
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ObyektDTO,
    ObyektDTOFromJSON,
    ObyektDTOFromJSONTyped,
    ObyektDTOToJSON,
} from './ObyektDTO';

/**
 * 
 * @export
 * @interface SwichTypeDTO
 */
export interface SwichTypeDTO {
    /**
     * 
     * @type {number}
     * @memberof SwichTypeDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SwichTypeDTO
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SwichTypeDTO
     */
    info?: string;
    /**
     * 
     * @type {ObyektDTO}
     * @memberof SwichTypeDTO
     */
    obyekt?: ObyektDTO;
}


export function SwichTypeDTOFromJSON(json: any): SwichTypeDTO {
    return SwichTypeDTOFromJSONTyped(json, false);
}

export function SwichTypeDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwichTypeDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'info': !exists(json, 'info') ? undefined : json['info'],
        'obyekt': !exists(json, 'obyekt') ? undefined : ObyektDTOFromJSON(json['obyekt']),
    };
}

export function SwichTypeDTOToJSON(value?: SwichTypeDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'info': value.info,
        'obyekt': ObyektDTOToJSON(value.obyekt),
    };
}

