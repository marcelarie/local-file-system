<?php
class Folder
{
    public $name;
    public $date;
    public $lastDate;
    public $size;

    public function __construct($name/* , $date, $lastDate $size*/)
    {
        $this->name = $name;
        // $this->date = $date;
        // $this->lastDate = $lastDate;
        // $this->size= $size;
    }
    public function get_name()
    {
        return $this->name;
    }
}
