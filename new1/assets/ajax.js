jQuery.ajax({
    type: "POST",
    url: emr_ajax_script.ajaxurl,
    data: {
        action : 'get_prop_avl_unit_count',
        post:emr_ajax_script.attribute
    },
    success: function (data) {
        var response = JSON.parse( data );
        if( response.AREA_FROM == 'NA' )
            response.AREA_FROM = '-';
        if( response.PRICE_FROM == 'NA' )
            response.PRICE_FROM = '-';
        if( response.UNIT_AVL == 'NA' )
            response.UNIT_AVL = '-';
        
        jQuery('.body-avl-unit-count .feature-numeric').removeClass('spinner-body').text( response.UNIT_AVL );
        jQuery('.body-area-from .feature-numeric').removeClass('spinner-body').text( response.AREA_FROM );
        jQuery('.body-price-from .feature-numeric').removeClass('spinner-body').text( response.PRICE_FROM );

        jQuery('.footer-avl-unit-count').text( response.UNIT_AVL ).removeClass('spinner-footer');
        jQuery('.footer-area-from').text( response.AREA_FROM ).removeClass('spinner-footer');
        jQuery('.footer-price-from').text( response.PRICE_FROM ).removeClass('spinner-footer');

        if( response.UNIT_AVL != '-' )
            jQuery( '.view-all-units-btn').text( 'VIEW ALL UNITS (' + response.UNIT_AVL + ')' );
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
});