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
 * @interface RozetkaDTO
 */
export interface RozetkaDTO {
    /**
     * 
     * @type {number}
     * @memberof RozetkaDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RozetkaDTO
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RozetkaDTO
     */
    model?: string;
    /**
     * 
     * @type {string}
     * @memberof RozetkaDTO
     */
    info?: string;
    /**
     * 
     * @type {ObyektDTO}
     * @memberof RozetkaDTO
     */
    obyekt?: ObyektDTO;
}


export function RozetkaDTOFromJSON(json: any): RozetkaDTO {
    return RozetkaDTOFromJSONTyped(json, false);
}

export function RozetkaDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): RozetkaDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'model': !exists(json, 'model') ? undefined : json['model'],
        'info': !exists(json, 'info') ? undefined : json['info'],
        'obyekt': !exists(json, 'obyekt') ? undefined : ObyektDTOFromJSON(json['obyekt']),
    };
}

export function RozetkaDTOToJSON(value?: RozetkaDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'model': value.model,
        'info': value.info,
        'obyekt': ObyektDTOToJSON(value.obyekt),
    };
}
