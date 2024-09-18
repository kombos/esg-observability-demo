/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useEsgobservabilitydemoEsgobservabilitydemo() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.EsgobservabilitydemoEsgobservabilitydemo.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QueryRawMaterialExtraction = (id: string,  options: any) => {
    const key = { type: 'QueryRawMaterialExtraction',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.EsgobservabilitydemoEsgobservabilitydemo.query.queryRawMaterialExtraction(id).then( res => res.data );
    }, options);
  }
  
  const QueryRawMaterialExtractionAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryRawMaterialExtractionAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.EsgobservabilitydemoEsgobservabilitydemo.query.queryRawMaterialExtractionAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryManufacturing = (id: string,  options: any) => {
    const key = { type: 'QueryManufacturing',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.EsgobservabilitydemoEsgobservabilitydemo.query.queryManufacturing(id).then( res => res.data );
    }, options);
  }
  
  const QueryManufacturingAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryManufacturingAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.EsgobservabilitydemoEsgobservabilitydemo.query.queryManufacturingAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryTransportation = (id: string,  options: any) => {
    const key = { type: 'QueryTransportation',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.EsgobservabilitydemoEsgobservabilitydemo.query.queryTransportation(id).then( res => res.data );
    }, options);
  }
  
  const QueryTransportationAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryTransportationAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.EsgobservabilitydemoEsgobservabilitydemo.query.queryTransportationAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryMaterialProcessing = (id: string,  options: any) => {
    const key = { type: 'QueryMaterialProcessing',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.EsgobservabilitydemoEsgobservabilitydemo.query.queryMaterialProcessing(id).then( res => res.data );
    }, options);
  }
  
  const QueryMaterialProcessingAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryMaterialProcessingAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.EsgobservabilitydemoEsgobservabilitydemo.query.queryMaterialProcessingAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QueryParams,QueryRawMaterialExtraction,QueryRawMaterialExtractionAll,QueryManufacturing,QueryManufacturingAll,QueryTransportation,QueryTransportationAll,QueryMaterialProcessing,QueryMaterialProcessingAll,
  }
}