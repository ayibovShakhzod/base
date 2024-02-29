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
    ShelfDTO,
    ShelfDTOFromJSON,
    ShelfDTOToJSON,
} from '../models';

export interface CreateShelfRequest {
    shelfDTO: ShelfDTO;
}

export interface DeleteShelfRequest {
    id: number;
}

export interface GetAllByType1Request {
    typeId: number;
    page?: number;
    size?: number;
    sort?: Array<string>;
}

export interface GetAllShelvesRequest {
    page?: number;
    size?: number;
    sort?: Array<string>;
}

export interface GetShelfRequest {
    id: number;
}

export interface PartialUpdateShelfRequest {
    id: number;
    shelfDTO: ShelfDTO;
}

export interface UpdateShelfRequest {
    id: number;
    shelfDTO: ShelfDTO;
}

/**
 * 
 */
export class ShelfResourceApi extends runtime.BaseAPI {

    /**
     */
    protected createShelfRequestOpts = (requestParameters: CreateShelfRequest): runtime.RequestOpts => {
        if (requestParameters.shelfDTO === null || requestParameters.shelfDTO === undefined) {
            throw new runtime.RequiredError('shelfDTO','Required parameter requestParameters.shelfDTO was null or undefined when calling createShelf.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        return {
            path: `/api/shelves`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShelfDTOToJSON(requestParameters.shelfDTO),
        };
    }

    /**
     */
    protected createShelfFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShelfDTOFromJSON(jsonValue));
    }

    /**
     */
    protected createShelfRaw = async (requestParameters: CreateShelfRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfDTO>> => {
        const context = this.createShelfRequestOpts(requestParameters);
        return this.createShelfFetch(context, initOverrides);
    }

    /**
     */
    createShelf = async (shelfDTO: ShelfDTO, initOverrides?: RequestInit): Promise<ShelfDTO> => {
        const response = await this.createShelfRaw({ shelfDTO: shelfDTO }, initOverrides);
        return await response.value();
    }



    /**
     */
    protected deleteShelfRequestOpts = (requestParameters: DeleteShelfRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteShelf.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        return {
            path: `/api/shelves/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected deleteShelfFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    protected deleteShelfRaw = async (requestParameters: DeleteShelfRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> => {
        const context = this.deleteShelfRequestOpts(requestParameters);
        return this.deleteShelfFetch(context, initOverrides);
    }

    /**
     */
    deleteShelf = async (id: number, initOverrides?: RequestInit): Promise<void> => {
        await this.deleteShelfRaw({ id: id }, initOverrides);
    }



    /**
     */
    protected getAllByType1RequestOpts = (requestParameters: GetAllByType1Request): runtime.RequestOpts => {
        if (requestParameters.typeId === null || requestParameters.typeId === undefined) {
            throw new runtime.RequiredError('typeId','Required parameter requestParameters.typeId was null or undefined when calling getAllByType1.');
        }

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

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        return {
            path: `/api/shelves/type/{typeId}`.replace(`{${"typeId"}}`, encodeURIComponent(String(requestParameters.typeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected getAllByType1Fetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShelfDTO>>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShelfDTOFromJSON));
    }

    /**
     */
    protected getAllByType1Raw = async (requestParameters: GetAllByType1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShelfDTO>>> => {
        const context = this.getAllByType1RequestOpts(requestParameters);
        return this.getAllByType1Fetch(context, initOverrides);
    }

    /**
     */
    getAllByType1 = async (typeId: number, page?: number, size?: number, sort?: Array<string>, initOverrides?: RequestInit): Promise<Array<ShelfDTO>> => {
        const response = await this.getAllByType1Raw({ typeId: typeId, page: page, size: size, sort: sort }, initOverrides);
        return await response.value();
    }


    /**
     */
    useGetAllByType1 = (() => {
        const key = (requestParameters: GetAllByType1Request, config?: SWRConfiguration<Array<ShelfDTO>>) => this.getAllByType1RequestOpts(requestParameters);
        const fetcher = (context: runtime.RequestOpts) => this.swrFetch(this.getAllByType1Fetch(context));
        const fn = (requestParameters: GetAllByType1Request, config?: SWRConfiguration<Array<ShelfDTO>>): SWRResponse<Array<ShelfDTO>> => {
            return useSWR<Array<ShelfDTO>>(() => key(requestParameters), fetcher, config);
        }
        fn.key = key
        return fn
    })()

    /**
     */
    protected getAllShelvesRequestOpts = (requestParameters: GetAllShelvesRequest): runtime.RequestOpts => {
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

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        return {
            path: `/api/shelves`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected getAllShelvesFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShelfDTO>>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShelfDTOFromJSON));
    }

    /**
     */
    protected getAllShelvesRaw = async (requestParameters: GetAllShelvesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShelfDTO>>> => {
        const context = this.getAllShelvesRequestOpts(requestParameters);
        return this.getAllShelvesFetch(context, initOverrides);
    }

    /**
     */
    getAllShelves = async (page?: number, size?: number, sort?: Array<string>, initOverrides?: RequestInit): Promise<Array<ShelfDTO>> => {
        const response = await this.getAllShelvesRaw({ page: page, size: size, sort: sort }, initOverrides);
        return await response.value();
    }


    /**
     */
    useGetAllShelves = (() => {
        const key = (page?: number, size?: number, sort?: Array<string>) => this.getAllShelvesRequestOpts({ page: page, size: size, sort: sort });
        const fetcher = (context: runtime.RequestOpts) => this.swrFetch(this.getAllShelvesFetch(context));
        const fn = (page?: number, size?: number, sort?: Array<string>, config?: SWRConfiguration<Array<ShelfDTO>>): SWRResponse<Array<ShelfDTO>> => {
            return useSWR<Array<ShelfDTO>>(() => key(page, size, sort), fetcher, config);
        }
        fn.key = key
        return fn
    })()

    /**
     */
    protected getShelfRequestOpts = (requestParameters: GetShelfRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getShelf.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        return {
            path: `/api/shelves/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected getShelfFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShelfDTOFromJSON(jsonValue));
    }

    /**
     */
    protected getShelfRaw = async (requestParameters: GetShelfRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfDTO>> => {
        const context = this.getShelfRequestOpts(requestParameters);
        return this.getShelfFetch(context, initOverrides);
    }

    /**
     */
    getShelf = async (id: number, initOverrides?: RequestInit): Promise<ShelfDTO> => {
        const response = await this.getShelfRaw({ id: id }, initOverrides);
        return await response.value();
    }


    /**
     */
    useGetShelf = (() => {
        const key = (id: number) => this.getShelfRequestOpts({ id: id });
        const fetcher = (context: runtime.RequestOpts) => this.swrFetch(this.getShelfFetch(context));
        const fn = (id: number, config?: SWRConfiguration<ShelfDTO>): SWRResponse<ShelfDTO> => {
            return useSWR<ShelfDTO>(() => key(id), fetcher, config);
        }
        fn.key = key
        return fn
    })()

    /**
     */
    protected partialUpdateShelfRequestOpts = (requestParameters: PartialUpdateShelfRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateShelf.');
        }

        if (requestParameters.shelfDTO === null || requestParameters.shelfDTO === undefined) {
            throw new runtime.RequiredError('shelfDTO','Required parameter requestParameters.shelfDTO was null or undefined when calling partialUpdateShelf.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        return {
            path: `/api/shelves/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ShelfDTOToJSON(requestParameters.shelfDTO),
        };
    }

    /**
     */
    protected partialUpdateShelfFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShelfDTOFromJSON(jsonValue));
    }

    /**
     */
    protected partialUpdateShelfRaw = async (requestParameters: PartialUpdateShelfRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfDTO>> => {
        const context = this.partialUpdateShelfRequestOpts(requestParameters);
        return this.partialUpdateShelfFetch(context, initOverrides);
    }

    /**
     */
    partialUpdateShelf = async (id: number, shelfDTO: ShelfDTO, initOverrides?: RequestInit): Promise<ShelfDTO> => {
        const response = await this.partialUpdateShelfRaw({ id: id, shelfDTO: shelfDTO }, initOverrides);
        return await response.value();
    }



    /**
     */
    protected updateShelfRequestOpts = (requestParameters: UpdateShelfRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateShelf.');
        }

        if (requestParameters.shelfDTO === null || requestParameters.shelfDTO === undefined) {
            throw new runtime.RequiredError('shelfDTO','Required parameter requestParameters.shelfDTO was null or undefined when calling updateShelf.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        return {
            path: `/api/shelves/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ShelfDTOToJSON(requestParameters.shelfDTO),
        };
    }

    /**
     */
    protected updateShelfFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShelfDTOFromJSON(jsonValue));
    }

    /**
     */
    protected updateShelfRaw = async (requestParameters: UpdateShelfRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShelfDTO>> => {
        const context = this.updateShelfRequestOpts(requestParameters);
        return this.updateShelfFetch(context, initOverrides);
    }

    /**
     */
    updateShelf = async (id: number, shelfDTO: ShelfDTO, initOverrides?: RequestInit): Promise<ShelfDTO> => {
        const response = await this.updateShelfRaw({ id: id, shelfDTO: shelfDTO }, initOverrides);
        return await response.value();
    }



}
