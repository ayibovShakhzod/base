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
    ShelfTypeDTO,
    ShelfTypeDTOFromJSON,
    ShelfTypeDTOFromJSONTyped,
    ShelfTypeDTOToJSON,
} from './ShelfTypeDTO';

/**
 * Javon
 * @export
 * @interface ShelfDTO
 */
export interface ShelfDTO {
    /**
     * 
     * @type {number}
     * @memberof ShelfDTO
     */
    id?: number;
    /**
     * Seriyasi
     * @type {string}
     * @memberof ShelfDTO
     */
    serialNumber?: string;
    /**
     * Raqami
     * @type {string}
     * @memberof ShelfDTO
     */
    digitNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ShelfDTO
     */
    info?: string;
    /**
     * 
     * @type {ShelfTypeDTO}
     * @memberof ShelfDTO
     */
    shelfType?: ShelfTypeDTO;
}


export function ShelfDTOFromJSON(json: any): ShelfDTO {
    return ShelfDTOFromJSONTyped(json, false);
}

export function ShelfDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShelfDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'serialNumber': !exists(json, 'serialNumber') ? undefined : json['serialNumber'],
        'digitNumber': !exists(json, 'digitNumber') ? undefined : json['digitNumber'],
        'info': !exists(json, 'info') ? undefined : json['info'],
        'shelfType': !exists(json, 'shelfType') ? undefined : ShelfTypeDTOFromJSON(json['shelfType']),
    };
}

export function ShelfDTOToJSON(value?: ShelfDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'serialNumber': value.serialNumber,
        'digitNumber': value.digitNumber,
        'info': value.info,
        'shelfType': ShelfTypeDTOToJSON(value.shelfType),
    };
}

