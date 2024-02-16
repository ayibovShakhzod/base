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
 * @interface UpsDTO
 */
export interface UpsDTO {
    /**
     * 
     * @type {number}
     * @memberof UpsDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UpsDTO
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UpsDTO
     */
    model?: string;
    /**
     * 
     * @type {string}
     * @memberof UpsDTO
     */
    power?: string;
    /**
     * 
     * @type {string}
     * @memberof UpsDTO
     */
    info?: string;
    /**
     * 
     * @type {ObyektDTO}
     * @memberof UpsDTO
     */
    obyekt?: ObyektDTO;
}


export function UpsDTOFromJSON(json: any): UpsDTO {
    return UpsDTOFromJSONTyped(json, false);
}

export function UpsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'model': !exists(json, 'model') ? undefined : json['model'],
        'power': !exists(json, 'power') ? undefined : json['power'],
        'info': !exists(json, 'info') ? undefined : json['info'],
        'obyekt': !exists(json, 'obyekt') ? undefined : ObyektDTOFromJSON(json['obyekt']),
    };
}

export function UpsDTOToJSON(value?: UpsDTO | null): any {
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
        'power': value.power,
        'info': value.info,
        'obyekt': ObyektDTOToJSON(value.obyekt),
    };
}

