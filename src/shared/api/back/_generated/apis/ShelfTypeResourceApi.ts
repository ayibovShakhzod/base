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
    ShelfTypeDTO,
    ShelfTypeDTOFromJSON,
    ShelfTypeDTOToJSON,
} from '../models';

export interface CreateShelfTypeRequest {
    shelfTypeDTO: ShelfTypeDTO;
}

export interface DeleteShelfTypeRequest {
    id: number;
}

export interface GetAllShelfTypesRequest {
    page?: number;
    size?: number;
    sort?: Array<string>;
}

export interface GetShelfTypeRequest {
    id: number;
}

export interface PartialUpdateShelfTypeRequest {
    id: number;
    shelfTypeDTO: ShelfTypeDTO;
}

export interface UpdateShelfTypeRequest {
    id: number;
    shelfTypeDTO: ShelfTypeDTO;
}

/**
 * 
 */
export class ShelfTypeResourceApi extends runtime.BaseAPI {

    /**
     */
    protected createShelfTypeRequestOpts = (requestParameters: CreateShelfTypeRequest): runtime.RequestOpts => {
        if (requestParameters.shelfTypeDTO === null || requestParameters.shelfTypeDTO === undefined) {
            throw new runtime.RequiredError('shelfTypeDTO','Required parameter requestParameters.shelfTypeDTO was null or undefined when calling createShelfType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/shelf-types`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShelfTypeDTOToJSON(requestParameters.shelfTypeDTO),
        };
    }

    /**
     */
    protected createShelfTypeFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfTypeDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShelfTypeDTOFromJSON(jsonValue));
    }

    /**
     */
    protected createShelfTypeRaw = async (requestParameters: CreateShelfTypeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfTypeDTO>> => {
        const context = this.createShelfTypeRequestOpts(requestParameters);
        return this.createShelfTypeFetch(context, initOverrides);
    }

    /**
     */
    createShelfType = async (shelfTypeDTO: ShelfTypeDTO, initOverrides?: RequestInit): Promise<ShelfTypeDTO> => {
        const response = await this.createShelfTypeRaw({ shelfTypeDTO: shelfTypeDTO }, initOverrides);
        return await response.value();
    }



    /**
     */
    protected deleteShelfTypeRequestOpts = (requestParameters: DeleteShelfTypeRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteShelfType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        return {
            path: `/api/shelf-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected deleteShelfTypeFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    protected deleteShelfTypeRaw = async (requestParameters: DeleteShelfTypeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> => {
        const context = this.deleteShelfTypeRequestOpts(requestParameters);
        return this.deleteShelfTypeFetch(context, initOverrides);
    }

    /**
     */
    deleteShelfType = async (id: number, initOverrides?: RequestInit): Promise<void> => {
        await this.deleteShelfTypeRaw({ id: id }, initOverrides);
    }



    /**
     */
    protected getAllShelfTypesRequestOpts = (requestParameters: GetAllShelfTypesRequest): runtime.RequestOpts => {
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
            path: `/api/shelf-types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected getAllShelfTypesFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShelfTypeDTO>>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShelfTypeDTOFromJSON));
    }

    /**
     */
    protected getAllShelfTypesRaw = async (requestParameters: GetAllShelfTypesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShelfTypeDTO>>> => {
        const context = this.getAllShelfTypesRequestOpts(requestParameters);
        return this.getAllShelfTypesFetch(context, initOverrides);
    }

    /**
     */
    getAllShelfTypes = async (page?: number, size?: number, sort?: Array<string>, initOverrides?: RequestInit): Promise<Array<ShelfTypeDTO>> => {
        const response = await this.getAllShelfTypesRaw({ page: page, size: size, sort: sort }, initOverrides);
        return await response.value();
    }


    /**
     */
    useGetAllShelfTypes = (() => {
        const key = (page?: number, size?: number, sort?: Array<string>) => this.getAllShelfTypesRequestOpts({ page: page, size: size, sort: sort });
        const fetcher = (context: runtime.RequestOpts) => this.swrFetch(this.getAllShelfTypesFetch(context));
        const fn = (page?: number, size?: number, sort?: Array<string>, config?: SWRConfiguration<Array<ShelfTypeDTO>>): SWRResponse<Array<ShelfTypeDTO>> => {
            return useSWR<Array<ShelfTypeDTO>>(() => key(page, size, sort), fetcher, config);
        }
        fn.key = key
        return fn
    })()

    /**
     */
    protected getShelfTypeRequestOpts = (requestParameters: GetShelfTypeRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getShelfType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        return {
            path: `/api/shelf-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected getShelfTypeFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfTypeDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShelfTypeDTOFromJSON(jsonValue));
    }

    /**
     */
    protected getShelfTypeRaw = async (requestParameters: GetShelfTypeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfTypeDTO>> => {
        const context = this.getShelfTypeRequestOpts(requestParameters);
        return this.getShelfTypeFetch(context, initOverrides);
    }

    /**
     */
    getShelfType = async (id: number, initOverrides?: RequestInit): Promise<ShelfTypeDTO> => {
        const response = await this.getShelfTypeRaw({ id: id }, initOverrides);
        return await response.value();
    }


    /**
     */
    useGetShelfType = (() => {
        const key = (id: number) => this.getShelfTypeRequestOpts({ id: id });
        const fetcher = (context: runtime.RequestOpts) => this.swrFetch(this.getShelfTypeFetch(context));
        const fn = (id: number, config?: SWRConfiguration<ShelfTypeDTO>): SWRResponse<ShelfTypeDTO> => {
            return useSWR<ShelfTypeDTO>(() => key(id), fetcher, config);
        }
        fn.key = key
        return fn
    })()

    /**
     */
    protected partialUpdateShelfTypeRequestOpts = (requestParameters: PartialUpdateShelfTypeRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateShelfType.');
        }

        if (requestParameters.shelfTypeDTO === null || requestParameters.shelfTypeDTO === undefined) {
            throw new runtime.RequiredError('shelfTypeDTO','Required parameter requestParameters.shelfTypeDTO was null or undefined when calling partialUpdateShelfType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/shelf-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ShelfTypeDTOToJSON(requestParameters.shelfTypeDTO),
        };
    }

    /**
     */
    protected partialUpdateShelfTypeFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfTypeDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShelfTypeDTOFromJSON(jsonValue));
    }

    /**
     */
    protected partialUpdateShelfTypeRaw = async (requestParameters: PartialUpdateShelfTypeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfTypeDTO>> => {
        const context = this.partialUpdateShelfTypeRequestOpts(requestParameters);
        return this.partialUpdateShelfTypeFetch(context, initOverrides);
    }

    /**
     */
    partialUpdateShelfType = async (id: number, shelfTypeDTO: ShelfTypeDTO, initOverrides?: RequestInit): Promise<ShelfTypeDTO> => {
        const response = await this.partialUpdateShelfTypeRaw({ id: id, shelfTypeDTO: shelfTypeDTO }, initOverrides);
        return await response.value();
    }



    /**
     */
    protected updateShelfTypeRequestOpts = (requestParameters: UpdateShelfTypeRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateShelfType.');
        }

        if (requestParameters.shelfTypeDTO === null || requestParameters.shelfTypeDTO === undefined) {
            throw new runtime.RequiredError('shelfTypeDTO','Required parameter requestParameters.shelfTypeDTO was null or undefined when calling updateShelfType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/shelf-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ShelfTypeDTOToJSON(requestParameters.shelfTypeDTO),
        };
    }

    /**
     */
    protected updateShelfTypeFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfTypeDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShelfTypeDTOFromJSON(jsonValue));
    }

    /**
     */
    protected updateShelfTypeRaw = async (requestParameters: UpdateShelfTypeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfTypeDTO>> => {
        const context = this.updateShelfTypeRequestOpts(requestParameters);
        return this.updateShelfTypeFetch(context, initOverrides);
    }

    /**
     */
    updateShelfType = async (id: number, shelfTypeDTO: ShelfTypeDTO, initOverrides?: RequestInit): Promise<ShelfTypeDTO> => {
        const response = await this.updateShelfTypeRaw({ id: id, shelfTypeDTO: shelfTypeDTO }, initOverrides);
        return await response.value();
    }



}