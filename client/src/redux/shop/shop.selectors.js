import { createSelector }  from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null)           
    );

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop], 
    // duoble bang !! turns in a truthy value
    // check and sees if the object is loaded. If the object is loaded, it will return true.
    shop => !!shop.collections
);