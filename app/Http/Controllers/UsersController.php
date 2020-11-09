<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UsersController extends Controller
{
    public function tryCreate(Request $request){
        $full_name = $request->all()['full_name'];
        $phone_number = $request->all()['phone_number'];
        $country = $request->all()['country'];
        $role = $request->all()['role'];
        $sms_token = mt_rand(1111,9999);
        
        if(!User::where('full_name', '=', $full_name)->exists()){
            if(!User::where('phone_number', '=', $phone_number)->exists()){

                if(User::create([
                    'full_name' => $full_name,
                    'phone_number' => $phone_number,
                    'country' => $country,
                    'role' => $role,
                    'sms_token' => $sms_token
                ])){
                    return true;
                }

            }
        }
        return json_encode(['error'=>'duplicate_entry']);

    }
    public function sendSMSToken($sms_token){

    }
    public function verifySMSToken(Request $request){
        return $request->all();
    }
}
