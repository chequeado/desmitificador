<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Option extends Model {

	use \Sortable;

    protected $table = 'option';

    protected $guarded = ['id'];
}
