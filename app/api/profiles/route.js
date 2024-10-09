import {  getProfiles } from '@/lib/data';

export const GET = async (request) => {
    
    const profiles = await getProfiles();
    
    return new Response(JSON.stringify({status:true, profiles:profiles.data.profiles}), { status: 201 })
}