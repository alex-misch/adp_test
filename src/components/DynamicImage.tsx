

import React, { useEffect, useCallback } from "react";
import { Image, Button, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { PictureState, actions as pictureActions } from "../store/ducks/pictures.duck";
import pictureService from '../service/picture'
import { IPicture } from "../interface/IPicture";
import { RootState } from "../store/store";


export const DynamicImage = () => {
    const pictures = useSelector<RootState, PictureState>(state => state.pictures);
    const dispatch = useDispatch()

    const updatePic = useCallback(async () => {
        dispatch(pictureActions.pending())
        const { data } = await pictureService.load()
        const pic = {
            title: data.title,
            id: data.embed_url,
            load_date: new Date(data.import_datetime),
            url: data.image_url,
        };
        dispatch(pictureActions.add(pic as IPicture))
    }, [dispatch])

    useEffect(() => {
        if (!pictures.stack.length) updatePic()
    }, [pictures.stack.length, updatePic])

    return (
        <>
            {pictures.isPending ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                    <Image src={pictures.stack[0]?.url} fluid />
                )}
            <Button block className="mt-2" variant="primary" onClick={updatePic}>Обновить</Button>
        </>
    )
}