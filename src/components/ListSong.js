import React, { useContext, useState, useEffect } from 'react';
import { Songs } from '../context';

export default function ListSong() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setidSong] = useState(0);
    const handlePlaySong = (idSong) => {
        setidSong(idSong)
        handleSetSong(idSong)
    };
    useEffect(() => {
        setidSong(song.idSong)
    }, [song]);
    return (
        <div className='col-span-2 overflow-y-scroll'>
            <table className='table-auto w-full'>
                <thead className='text-while h-14'>
                    <tr>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left'>Title</th>
                        <th className='w-[10%]'>Author</th>
                        <th className='w-[10%]'><i className='fa fa-download'></i></th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr
                            key={index}
                            className={`bg-slate-800 h-14 text-gray-500 hover:bg-gray-600 ${idSong === song.id && 'text-teal-400'}`}
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className='text-center'>{index + 1}</td>
                            <td>{song.name}</td>
                            <td className='text-center'>{song.author}</td>
                            <td className='text-center'>
                                <a href={song.url}>
                                    <i className='fa fa-download'></i>
                                </a>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
