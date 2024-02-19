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


import * as runtime from '../runtime';
import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import {
    JWTToken,
    JWTTokenFromJSON,
    JWTTokenToJSON,
    LoginVM,
    LoginVMFromJSON,
    LoginVMToJSON,
} from '../models';

export interface AuthorizeRequest {
    loginVM: LoginVM;
}

/**
 * 
 */
export class AuthenticateApi extends runtime.BaseAPI {

    /**
     * Authenticate a user.
     */
    protected authorizeRequestOpts = (requestParameters: AuthorizeRequest): runtime.RequestOpts => {
        if (requestParameters.loginVM === null || requestParameters.loginVM === undefined) {
            throw new runtime.RequiredError('loginVM','Required parameter requestParameters.loginVM was null or undefined when calling authorize.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/authenticate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginVMToJSON(requestParameters.loginVM),
        };
    }

    /**
     * Authenticate a user.
     */
    protected authorizeFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JWTToken>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JWTTokenFromJSON(jsonValue));
    }

    /**
     * Authenticate a user.
     */
    protected authorizeRaw = async (requestParameters: AuthorizeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JWTToken>> => {
        const context = this.authorizeRequestOpts(requestParameters);
        return this.authorizeFetch(context, initOverrides);
    }

    /**
     * Authenticate a user.
     */
    authorize = async (loginVM: LoginVM, initOverrides?: RequestInit): Promise<JWTToken> => {
        const response = await this.authorizeRaw({ loginVM: loginVM }, initOverrides);
        return await response.value();
    }



}