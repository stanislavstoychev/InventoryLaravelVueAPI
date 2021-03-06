<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    protected $guarded = [];

    public function project() {
        return $this->belongsTo('App\Project');
    }

    public function files() {
        return $this->hasMany('App\Issuefile');
    }
}