// This component returns a list of links with helpful resources related to
// the list of tips displayed on the resources page
export const Resources =  () => {
    return(
        <div className="flex flex-col justify-between gap-0.5 mr-10">
            <h1>Resources</h1>
            <a href="https://css.umich.edu/publications/factsheets/sustainability-indicators/carbon-footprint-factsheet">
            Carbon Footprint Factsheet
            </a>
            <a href="https://www.conservation.org/stories/what-is-a-carbon-footprint">
            What is a Carbon Footprint?
            </a>
            <a href="https://sfyl.ifas.ufl.edu/archive/hot_topics/sustainable_living/reducing_car_usage.shtml">Reducing car usage</a>
            <a href="https://ecology.wa.gov/issues-and-local-projects/education-training/what-you-can-do/reducing-car-pollution">
            Reducing air pollution from cars
            </a>
            <a href="https://www.bbcgoodfood.com/health/healthy-food-guides/ways-to-eat-less-meat">
                10 ways to eat less meat
            </a>
            <a href="https://remake.world/stories/style/how-to-mend-your-clothes-during-quarantine-5-easy-stitch-fixes/">How to mend your clothes</a>
            <a href="https://www.gardeners.com/how-to/all-about-composting/5061.html?cq_med=&cq_net=x&cq_plac=&cq_plt=gp&cq_pos=&g_acctid=543-582-4261&g_adgroupid=&g_adid=&g_adtype=none&g_campaign=PMAX_Zombies&g_campaignid=21850149343&g_keyword=&g_keywordid=&g_network=x&utm_source=google&utm_medium=cpc&utm_campaign=PMAX_Zombies&utm_term=&SC=GGLPLA&gad_source=1&gclid=Cj0KCQjw4v6-BhDuARIsALprm32fFMMe1cmXinuEWRWeQ5rI2dg30_LYsTi14-DfGuGiqTXPDc5lOHUaAvRiEALw_wcB">Compost 101- All about composting</a>
        </div>
        
    );
}