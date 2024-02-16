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
/**
 * 
 * @export
 * @interface JWTToken
 */
export interface JWTToken {
    /**
     * 
     * @type {string}
     * @memberof JWTToken
     */
    idToken?: string;
}


export function JWTTokenFromJSON(json: any): JWTToken {
    return JWTTokenFromJSONTyped(json, false);
}

export function JWTTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): JWTToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'idToken': !exists(json, 'id_token') ? undefined : json['id_token'],
    };
}

export function JWTTokenToJSON(value?: JWTToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id_token': value.idToken,
    };
}

