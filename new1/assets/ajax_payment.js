jQuery(function($) {
$(document).on("click",".view-details",function() {
    var that = $(this);
    if( that.attr('data-rendered') == 'Y')
        return true;
    var payment_id = $(this).data('id');
    //alert(payment_id);
    jQuery.ajax({
        type: "POST",
        url: payment_ajax_script.ajaxurl,
        data: {
            action : 'get_payment_plan',
            post: payment_id
        },
        success: function (data) {
            //console.log(data);
            var response = $.parseJSON(data);
            if( response.MSG == 'NA' )
                response.MSG = '-';
            $('#collapseRow' + payment_id ).find('.payment-plan-container').removeClass('spinner-body');
            if( response.MSG != '-' ) {
                var PaymentHTML = '';
                $(this).closest('tr').remove();
                PaymentHTML += '<tr class="table-heading"><td><span>Milestones</span></td><td><span>%</span></td><td><span>Date</span></td><td><span>AED</span></td></tr>';
                $.each(response.MSG, function (i, item) {
                    var PaymentDate = item.cm_Term_Date__c;
                    PaymentDate = PaymentDate.split("-").reverse().join("/");
                    var PriceFormat = item.cm_Net_Amount__c;
                    var FormattedPrice = parseInt(PriceFormat).toLocaleString(); 
                    PaymentHTML += '<tr><td><span>' + item.cm_Milestone_Name__c + '</span></td><td><span>' + item.cm_Net_Percent__c + '</span></td><td><span>' + PaymentDate + '</span></td><td><span>' + FormattedPrice + '</span></td></tr>';
                });
                //console.log('#records_table_' +payment_id);
                $('#records_table_' +payment_id).append(PaymentHTML);
            } 
            else 
            {
                jQuery( '#records_table_' +payment_id).hide();
                jQuery( '.payment_error_' +payment_id).show().text( 'No payment plan available' );
            }
            that.attr('data-rendered', 'Y');
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
});
});