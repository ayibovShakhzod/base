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
 * @interface StoykaTypeDTO
 */
export interface StoykaTypeDTO {
    /**
     * 
     * @type {number}
     * @memberof StoykaTypeDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof StoykaTypeDTO
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof StoykaTypeDTO
     */
    info?: string;
    /**
     * 
     * @type {ObyektDTO}
     * @memberof StoykaTypeDTO
     */
    obyekt?: ObyektDTO;
}


export function StoykaTypeDTOFromJSON(json: any): StoykaTypeDTO {
    return StoykaTypeDTOFromJSONTyped(json, false);
}

export function StoykaTypeDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoykaTypeDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'info': !exists(json, 'info') ? undefined : json['info'],
        'obyekt': !exists(json, 'obyekt') ? undefined : ObyektDTOFromJSON(json['obyekt']),
    };
}

export function StoykaTypeDTOToJSON(value?: StoykaTypeDTO | null): any {
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

