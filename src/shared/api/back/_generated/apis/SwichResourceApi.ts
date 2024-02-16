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
    SwichDTO,
    SwichDTOFromJSON,
    SwichDTOToJSON,
} from '../models';

export interface CreateSwichRequest {
    swichDTO: SwichDTO;
}

export interface DeleteSwichRequest {
    id: number;
}

export interface GetAllSwichesRequest {
    page?: number;
    size?: number;
    sort?: Array<string>;
}

export interface GetSwichRequest {
    id: number;
}

export interface PartialUpdateSwichRequest {
    id: number;
    swichDTO: SwichDTO;
}

export interface UpdateSwichRequest {
    id: number;
    swichDTO: SwichDTO;
}

/**
 * 
 */
export class SwichResourceApi extends runtime.BaseAPI {

    /**
     */
    protected createSwichRequestOpts = (requestParameters: CreateSwichRequest): runtime.RequestOpts => {
        if (requestParameters.swichDTO === null || requestParameters.swichDTO === undefined) {
            throw new runtime.RequiredError('swichDTO','Required parameter requestParameters.swichDTO was null or undefined when calling createSwich.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/swiches`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SwichDTOToJSON(requestParameters.swichDTO),
        };
    }

    /**
     */
    protected createSwichFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwichDTOFromJSON(jsonValue));
    }

    /**
     */
    protected createSwichRaw = async (requestParameters: CreateSwichRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichDTO>> => {
        const context = this.createSwichRequestOpts(requestParameters);
        return this.createSwichFetch(context, initOverrides);
    }

    /**
     */
    createSwich = async (swichDTO: SwichDTO, initOverrides?: RequestInit): Promise<SwichDTO> => {
        const response = await this.createSwichRaw({ swichDTO: swichDTO }, initOverrides);
        return await response.value();
    }



    /**
     */
    protected deleteSwichRequestOpts = (requestParameters: DeleteSwichRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteSwich.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        return {
            path: `/api/swiches/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected deleteSwichFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    protected deleteSwichRaw = async (requestParameters: DeleteSwichRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> => {
        const context = this.deleteSwichRequestOpts(requestParameters);
        return this.deleteSwichFetch(context, initOverrides);
    }

    /**
     */
    deleteSwich = async (id: number, initOverrides?: RequestInit): Promise<void> => {
        await this.deleteSwichRaw({ id: id }, initOverrides);
    }



    /**
     */
    protected getAllSwichesRequestOpts = (requestParameters: GetAllSwichesRequest): runtime.RequestOpts => {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        return {
            path: `/api/swiches`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected getAllSwichesFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<SwichDTO>>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SwichDTOFromJSON));
    }

    /**
     */
    protected getAllSwichesRaw = async (requestParameters: GetAllSwichesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<SwichDTO>>> => {
        const context = this.getAllSwichesRequestOpts(requestParameters);
        return this.getAllSwichesFetch(context, initOverrides);
    }

    /**
     */
    getAllSwiches = async (page?: number, size?: number, sort?: Array<string>, initOverrides?: RequestInit): Promise<Array<SwichDTO>> => {
        const response = await this.getAllSwichesRaw({ page: page, size: size, sort: sort }, initOverrides);
        return await response.value();
    }


    /**
     */
    useGetAllSwiches = (() => {
        const key = (page?: number, size?: number, sort?: Array<string>) => this.getAllSwichesRequestOpts({ page: page, size: size, sort: sort });
        const fetcher = (context: runtime.RequestOpts) => this.swrFetch(this.getAllSwichesFetch(context));
        const fn = (page?: number, size?: number, sort?: Array<string>, config?: SWRConfiguration<Array<SwichDTO>>): SWRResponse<Array<SwichDTO>> => {
            return useSWR<Array<SwichDTO>>(() => key(page, size, sort), fetcher, config);
        }
        fn.key = key
        return fn
    })()

    /**
     */
    protected getSwichRequestOpts = (requestParameters: GetSwichRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSwich.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        return {
            path: `/api/swiches/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected getSwichFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwichDTOFromJSON(jsonValue));
    }

    /**
     */
    protected getSwichRaw = async (requestParameters: GetSwichRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichDTO>> => {
        const context = this.getSwichRequestOpts(requestParameters);
        return this.getSwichFetch(context, initOverrides);
    }

    /**
     */
    getSwich = async (id: number, initOverrides?: RequestInit): Promise<SwichDTO> => {
        const response = await this.getSwichRaw({ id: id }, initOverrides);
        return await response.value();
    }


    /**
     */
    useGetSwich = (() => {
        const key = (id: number) => this.getSwichRequestOpts({ id: id });
        const fetcher = (context: runtime.RequestOpts) => this.swrFetch(this.getSwichFetch(context));
        const fn = (id: number, config?: SWRConfiguration<SwichDTO>): SWRResponse<SwichDTO> => {
            return useSWR<SwichDTO>(() => key(id), fetcher, config);
        }
        fn.key = key
        return fn
    })()

    /**
     */
    protected partialUpdateSwichRequestOpts = (requestParameters: PartialUpdateSwichRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateSwich.');
        }

        if (requestParameters.swichDTO === null || requestParameters.swichDTO === undefined) {
            throw new runtime.RequiredError('swichDTO','Required parameter requestParameters.swichDTO was null or undefined when calling partialUpdateSwich.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/swiches/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SwichDTOToJSON(requestParameters.swichDTO),
        };
    }

    /**
     */
    protected partialUpdateSwichFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwichDTOFromJSON(jsonValue));
    }

    /**
     */
    protected partialUpdateSwichRaw = async (requestParameters: PartialUpdateSwichRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichDTO>> => {
        const context = this.partialUpdateSwichRequestOpts(requestParameters);
        return this.partialUpdateSwichFetch(context, initOverrides);
    }

    /**
     */
    partialUpdateSwich = async (id: number, swichDTO: SwichDTO, initOverrides?: RequestInit): Promise<SwichDTO> => {
        const response = await this.partialUpdateSwichRaw({ id: id, swichDTO: swichDTO }, initOverrides);
        return await response.value();
    }



    /**
     */
    protected updateSwichRequestOpts = (requestParameters: UpdateSwichRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateSwich.');
        }

        if (requestParameters.swichDTO === null || requestParameters.swichDTO === undefined) {
            throw new runtime.RequiredError('swichDTO','Required parameter requestParameters.swichDTO was null or undefined when calling updateSwich.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/swiches/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SwichDTOToJSON(requestParameters.swichDTO),
        };
    }

    /**
     */
    protected updateSwichFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwichDTOFromJSON(jsonValue));
    }

    /**
     */
    protected updateSwichRaw = async (requestParameters: UpdateSwichRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichDTO>> => {
        const context = this.updateSwichRequestOpts(requestParameters);
        return this.updateSwichFetch(context, initOverrides);
    }

    /**
     */
    updateSwich = async (id: number, swichDTO: SwichDTO, initOverrides?: RequestInit): Promise<SwichDTO> => {
        const response = await this.updateSwichRaw({ id: id, swichDTO: swichDTO }, initOverrides);
        return await response.value();
    }



}
