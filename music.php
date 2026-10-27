<?php
// Music extension, https://github.com/GiovanniSalmeri/yellow-music

class YellowMusic {
    const VERSION = "1.0.0";
    public $yellow;         // access to API
    
    // Handle initialisation
    public function onLoad($yellow) {
        $this->yellow = $yellow;
        $this->yellow->system->setDefault("musicReflow", "1");
    }

    // Handle page extra data
    public function onParsePageExtra($page, $name) {
        $output = null;
        if ($name=="header") {
            $assetLocation = $this->yellow->system->get("coreServerBase").$this->yellow->system->get("coreAssetLocation");
            $output .= "<link rel=\"stylesheet\" media=\"all\" href=\"{$assetLocation}music.css\" />\n";
            $musicReflow = $this->yellow->system->get("musicReflow");
            $output .= "<script type=\"text/javascript\">var musicReflow = ".json_encode((bool)$musicReflow)."</script>\n";
            $output .= "<script src=\"{$assetLocation}music-abcjs.js\"></script>\n";
            $output .= "<script defer=\"defer\" src=\"{$assetLocation}music.js\"></script>\n";
        }
        return $output;
    }
}
