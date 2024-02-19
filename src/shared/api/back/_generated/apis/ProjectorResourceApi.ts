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
    ProjectorDTO,
    ProjectorDTOFromJSON,
    ProjectorDTOToJSON,
} from '../models';

export interface CreateProjectorRequest {
    projectorDTO: ProjectorDTO;
}

export interface DeleteProjectorRequest {
    id: number;
}

export interface GetAllProjectorsRequest {
    page?: number;
    size?: number;
    sort?: Array<string>;
}

export interface GetProjectorRequest {
    id: number;
}

export interface PartialUpdateProjectorRequest {
    id: number;
    projectorDTO: ProjectorDTO;
}

export interface UpdateProjectorRequest {
    id: number;
    projectorDTO: ProjectorDTO;
}

/**
 * 
 */
export class ProjectorResourceApi extends runtime.BaseAPI {

    /**
     */
    protected createProjectorRequestOpts = (requestParameters: CreateProjectorRequest): runtime.RequestOpts => {
        if (requestParameters.projectorDTO === null || requestParameters.projectorDTO === undefined) {
            throw new runtime.RequiredError('projectorDTO','Required parameter requestParameters.projectorDTO was null or undefined when calling createProjector.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/projectors`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProjectorDTOToJSON(requestParameters.projectorDTO),
        };
    }

    /**
     */
    protected createProjectorFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProjectorDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectorDTOFromJSON(jsonValue));
    }

    /**
     */
    protected createProjectorRaw = async (requestParameters: CreateProjectorRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProjectorDTO>> => {
        const context = this.createProjectorRequestOpts(requestParameters);
        return this.createProjectorFetch(context, initOverrides);
    }

    /**
     */
    createProjector = async (projectorDTO: ProjectorDTO, initOverrides?: RequestInit): Promise<ProjectorDTO> => {
        const response = await this.createProjectorRaw({ projectorDTO: projectorDTO }, initOverrides);
        return await response.value();
    }



    /**
     */
    protected deleteProjectorRequestOpts = (requestParameters: DeleteProjectorRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteProjector.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        return {
            path: `/api/projectors/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected deleteProjectorFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    protected deleteProjectorRaw = async (requestParameters: DeleteProjectorRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> => {
        const context = this.deleteProjectorRequestOpts(requestParameters);
        return this.deleteProjectorFetch(context, initOverrides);
    }

    /**
     */
    deleteProjector = async (id: number, initOverrides?: RequestInit): Promise<void> => {
        await this.deleteProjectorRaw({ id: id }, initOverrides);
    }



    /**
     */
    protected getAllProjectorsRequestOpts = (requestParameters: GetAllProjectorsRequest): runtime.RequestOpts => {
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
            path: `/api/projectors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected getAllProjectorsFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ProjectorDTO>>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProjectorDTOFromJSON));
    }

    /**
     */
    protected getAllProjectorsRaw = async (requestParameters: GetAllProjectorsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ProjectorDTO>>> => {
        const context = this.getAllProjectorsRequestOpts(requestParameters);
        return this.getAllProjectorsFetch(context, initOverrides);
    }

    /**
     */
    getAllProjectors = async (page?: number, size?: number, sort?: Array<string>, initOverrides?: RequestInit): Promise<Array<ProjectorDTO>> => {
        const response = await this.getAllProjectorsRaw({ page: page, size: size, sort: sort }, initOverrides);
        return await response.value();
    }


    /**
     */
    useGetAllProjectors = (() => {
        const key = (page?: number, size?: number, sort?: Array<string>) => this.getAllProjectorsRequestOpts({ page: page, size: size, sort: sort });
        const fetcher = (context: runtime.RequestOpts) => this.swrFetch(this.getAllProjectorsFetch(context));
        const fn = (page?: number, size?: number, sort?: Array<string>, config?: SWRConfiguration<Array<ProjectorDTO>>): SWRResponse<Array<ProjectorDTO>> => {
            return useSWR<Array<ProjectorDTO>>(() => key(page, size, sort), fetcher, config);
        }
        fn.key = key
        return fn
    })()

    /**
     */
    protected getProjectorRequestOpts = (requestParameters: GetProjectorRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProjector.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        return {
            path: `/api/projectors/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     */
    protected getProjectorFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProjectorDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectorDTOFromJSON(jsonValue));
    }

    /**
     */
    protected getProjectorRaw = async (requestParameters: GetProjectorRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProjectorDTO>> => {
        const context = this.getProjectorRequestOpts(requestParameters);
        return this.getProjectorFetch(context, initOverrides);
    }

    /**
     */
    getProjector = async (id: number, initOverrides?: RequestInit): Promise<ProjectorDTO> => {
        const response = await this.getProjectorRaw({ id: id }, initOverrides);
        return await response.value();
    }


    /**
     */
    useGetProjector = (() => {
        const key = (id: number) => this.getProjectorRequestOpts({ id: id });
        const fetcher = (context: runtime.RequestOpts) => this.swrFetch(this.getProjectorFetch(context));
        const fn = (id: number, config?: SWRConfiguration<ProjectorDTO>): SWRResponse<ProjectorDTO> => {
            return useSWR<ProjectorDTO>(() => key(id), fetcher, config);
        }
        fn.key = key
        return fn
    })()

    /**
     */
    protected partialUpdateProjectorRequestOpts = (requestParameters: PartialUpdateProjectorRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateProjector.');
        }

        if (requestParameters.projectorDTO === null || requestParameters.projectorDTO === undefined) {
            throw new runtime.RequiredError('projectorDTO','Required parameter requestParameters.projectorDTO was null or undefined when calling partialUpdateProjector.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/projectors/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ProjectorDTOToJSON(requestParameters.projectorDTO),
        };
    }

    /**
     */
    protected partialUpdateProjectorFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProjectorDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectorDTOFromJSON(jsonValue));
    }

    /**
     */
    protected partialUpdateProjectorRaw = async (requestParameters: PartialUpdateProjectorRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProjectorDTO>> => {
        const context = this.partialUpdateProjectorRequestOpts(requestParameters);
        return this.partialUpdateProjectorFetch(context, initOverrides);
    }

    /**
     */
    partialUpdateProjector = async (id: number, projectorDTO: ProjectorDTO, initOverrides?: RequestInit): Promise<ProjectorDTO> => {
        const response = await this.partialUpdateProjectorRaw({ id: id, projectorDTO: projectorDTO }, initOverrides);
        return await response.value();
    }



    /**
     */
    protected updateProjectorRequestOpts = (requestParameters: UpdateProjectorRequest): runtime.RequestOpts => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateProjector.');
        }

        if (requestParameters.projectorDTO === null || requestParameters.projectorDTO === undefined) {
            throw new runtime.RequiredError('projectorDTO','Required parameter requestParameters.projectorDTO was null or undefined when calling updateProjector.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return {
            path: `/api/projectors/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProjectorDTOToJSON(requestParameters.projectorDTO),
        };
    }

    /**
     */
    protected updateProjectorFetch = async (context: runtime.RequestOpts, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProjectorDTO>> => {
        const response = await this.request(context, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectorDTOFromJSON(jsonValue));
    }

    /**
     */
    protected updateProjectorRaw = async (requestParameters: UpdateProjectorRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProjectorDTO>> => {
        const context = this.updateProjectorRequestOpts(requestParameters);
        return this.updateProjectorFetch(context, initOverrides);
    }

    /**
     */
    updateProjector = async (id: number, projectorDTO: ProjectorDTO, initOverrides?: RequestInit): Promise<ProjectorDTO> => {
        const response = await this.updateProjectorRaw({ id: id, projectorDTO: projectorDTO }, initOverrides);
        return await response.value();
    }



}