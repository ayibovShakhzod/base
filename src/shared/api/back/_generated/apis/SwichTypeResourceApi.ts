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
    SwichTypeDTO,
    SwichTypeDTOFromJSON,
    SwichTypeDTOToJSON,
} from '../models';

export interface CreateSwichTypeRequest {
    swichTypeDTO: SwichTypeDTO;
}

export interface DeleteSwichTypeRequest {
    id: number;
}

export interface GetAllSwichTypesRequest {
    page?: number;
    size?: number;
    sort?: Array<string>;
}

export interface GetSwichTypeRequest {
    id: number;
}

export interface PartialUpdateSwichTypeRequest {
    id: number;
    swichTypeDTO: SwichTypeDTO;
}

export interface UpdateSwichTypeRequest {
    id: number;
    swichTypeDTO: SwichTypeDTO;
}

/**
 * 
 */
export class SwichTypeResourceApi extends runtime.BaseAPI {

    /**
     */
    protected createSwichTypeRequestOpts = (requestParameters: CreateSwichTypeRequest): runtime.RequestOpts => {
        if (requestParameters.swichTypeDTO === null || requestParameters.swichTypeDTO === undefined) {
            throw new runtime.RequiredError('swichTypeDTO','Required parameter requestParameters.swichTypeDTO was null or undefined when calling createSwichType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/swich-types`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SwichTypeDTOToJSON(requestParameters.swichTypeDTO),
        };
    }

    /**
     */
    protected createSwichTypeFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichTypeDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwichTypeDTOFromJSON(jsonValue));
    }

    /**
     */
    protected createSwichTypeRaw = async (requestParameters: CreateSwichTypeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichTypeDTO>> => {
        const context = this.createSwichTypeRequestOpts(requestParameters);
        return this.createSwichTypeFetch(context, initOverrides);
    }

    /**
     */
    createSwichType = async (swichTypeDTO: SwichTypeDTO, initOverrides?: RequestInit): Promise<SwichTypeDTO> => {
        const response = await this.createSwichTypeRaw({ swichTypeDTO: swichTypeDTO }, initOverrides);
        return await response.value();
    }



    /**
     */
    protected deleteSwichTypeRequestOpts = (requestParameters: DeleteSwichTypeRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteSwichType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        return {
            path: `/api/swich-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected deleteSwichTypeFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    protected deleteSwichTypeRaw = async (requestParameters: DeleteSwichTypeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> => {
        const context = this.deleteSwichTypeRequestOpts(requestParameters);
        return this.deleteSwichTypeFetch(context, initOverrides);
    }

    /**
     */
    deleteSwichType = async (id: number, initOverrides?: RequestInit): Promise<void> => {
        await this.deleteSwichTypeRaw({ id: id }, initOverrides);
    }



    /**
     */
    protected getAllSwichTypesRequestOpts = (requestParameters: GetAllSwichTypesRequest): runtime.RequestOpts => {
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
            path: `/api/swich-types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected getAllSwichTypesFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<SwichTypeDTO>>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SwichTypeDTOFromJSON));
    }

    /**
     */
    protected getAllSwichTypesRaw = async (requestParameters: GetAllSwichTypesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<SwichTypeDTO>>> => {
        const context = this.getAllSwichTypesRequestOpts(requestParameters);
        return this.getAllSwichTypesFetch(context, initOverrides);
    }

    /**
     */
    getAllSwichTypes = async (page?: number, size?: number, sort?: Array<string>, initOverrides?: RequestInit): Promise<Array<SwichTypeDTO>> => {
        const response = await this.getAllSwichTypesRaw({ page: page, size: size, sort: sort }, initOverrides);
        return await response.value();
    }


    /**
     */
    useGetAllSwichTypes = (() => {
        const key = (page?: number, size?: number, sort?: Array<string>) => this.getAllSwichTypesRequestOpts({ page: page, size: size, sort: sort });
        const fetcher = (context: runtime.RequestOpts) => this.swrFetch(this.getAllSwichTypesFetch(context));
        const fn = (page?: number, size?: number, sort?: Array<string>, config?: SWRConfiguration<Array<SwichTypeDTO>>): SWRResponse<Array<SwichTypeDTO>> => {
            return useSWR<Array<SwichTypeDTO>>(() => key(page, size, sort), fetcher, config);
        }
        fn.key = key
        return fn
    })()

    /**
     */
    protected getSwichTypeRequestOpts = (requestParameters: GetSwichTypeRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSwichType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        return {
            path: `/api/swich-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected getSwichTypeFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichTypeDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwichTypeDTOFromJSON(jsonValue));
    }

    /**
     */
    protected getSwichTypeRaw = async (requestParameters: GetSwichTypeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichTypeDTO>> => {
        const context = this.getSwichTypeRequestOpts(requestParameters);
        return this.getSwichTypeFetch(context, initOverrides);
    }

    /**
     */
    getSwichType = async (id: number, initOverrides?: RequestInit): Promise<SwichTypeDTO> => {
        const response = await this.getSwichTypeRaw({ id: id }, initOverrides);
        return await response.value();
    }


    /**
     */
    useGetSwichType = (() => {
        const key = (id: number) => this.getSwichTypeRequestOpts({ id: id });
        const fetcher = (context: runtime.RequestOpts) => this.swrFetch(this.getSwichTypeFetch(context));
        const fn = (id: number, config?: SWRConfiguration<SwichTypeDTO>): SWRResponse<SwichTypeDTO> => {
            return useSWR<SwichTypeDTO>(() => key(id), fetcher, config);
        }
        fn.key = key
        return fn
    })()

    /**
     */
    protected partialUpdateSwichTypeRequestOpts = (requestParameters: PartialUpdateSwichTypeRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateSwichType.');
        }

        if (requestParameters.swichTypeDTO === null || requestParameters.swichTypeDTO === undefined) {
            throw new runtime.RequiredError('swichTypeDTO','Required parameter requestParameters.swichTypeDTO was null or undefined when calling partialUpdateSwichType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/swich-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SwichTypeDTOToJSON(requestParameters.swichTypeDTO),
        };
    }

    /**
     */
    protected partialUpdateSwichTypeFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichTypeDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwichTypeDTOFromJSON(jsonValue));
    }

    /**
     */
    protected partialUpdateSwichTypeRaw = async (requestParameters: PartialUpdateSwichTypeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichTypeDTO>> => {
        const context = this.partialUpdateSwichTypeRequestOpts(requestParameters);
        return this.partialUpdateSwichTypeFetch(context, initOverrides);
    }

    /**
     */
    partialUpdateSwichType = async (id: number, swichTypeDTO: SwichTypeDTO, initOverrides?: RequestInit): Promise<SwichTypeDTO> => {
        const response = await this.partialUpdateSwichTypeRaw({ id: id, swichTypeDTO: swichTypeDTO }, initOverrides);
        return await response.value();
    }



    /**
     */
    protected updateSwichTypeRequestOpts = (requestParameters: UpdateSwichTypeRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateSwichType.');
        }

        if (requestParameters.swichTypeDTO === null || requestParameters.swichTypeDTO === undefined) {
            throw new runtime.RequiredError('swichTypeDTO','Required parameter requestParameters.swichTypeDTO was null or undefined when calling updateSwichType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/swich-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SwichTypeDTOToJSON(requestParameters.swichTypeDTO),
        };
    }

    /**
     */
    protected updateSwichTypeFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichTypeDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwichTypeDTOFromJSON(jsonValue));
    }

    /**
     */
    protected updateSwichTypeRaw = async (requestParameters: UpdateSwichTypeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwichTypeDTO>> => {
        const context = this.updateSwichTypeRequestOpts(requestParameters);
        return this.updateSwichTypeFetch(context, initOverrides);
    }

    /**
     */
    updateSwichType = async (id: number, swichTypeDTO: SwichTypeDTO, initOverrides?: RequestInit): Promise<SwichTypeDTO> => {
        const response = await this.updateSwichTypeRaw({ id: id, swichTypeDTO: swichTypeDTO }, initOverrides);
        return await response.value();
    }



}